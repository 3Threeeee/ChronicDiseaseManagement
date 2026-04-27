# Task-08：预警系统

**前置条件：** Task-04（服药打卡）、Task-05（库存管理）、Task-06（SOAP档案）
**预计复杂度：** 中
**批次：** 3（与 Task-07 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保以下 task 已合并：feature/patient-checkin, feature/inventory, feature/soap-records, feature/ui-components

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/alert-system

## 第3步：接口契约

### 已有 Prisma 模型
- Alert: id, targetUserId, sourceUserId, level(YELLOW|ORANGE|RED), title, message, status(UNREAD|READ|RESOLVED), relatedCheckInId, relatedMedicineId, createdAt, readAt
- AlertSubscription: id, userId, missAlertEnabled, inventoryAlertEnabled, sideEffectAlertEnabled, missThresholdMinutes
- CheckIn: id, userId, medicineId, scheduledTime, missed, missedAlertSent
- SOAPRecord: id, userId, symptomSeverity
- MedicineInventory: id, medicineId, remainingCount, alertThreshold
- FamilyBinding: id, patientId, familyId

### 已有 TypeScript 类型
```typescript
export interface AlertInfo {
  id: string; targetUserId: string; sourceUserId: string;
  sourceUserName: string; level: 'YELLOW' | 'ORANGE' | 'RED';
  title: string; message: string;
  status: 'UNREAD' | 'READ' | 'RESOLVED'; createdAt: string;
}
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
```

### API 路由约定
- GET /api/alerts      → query ?targetUserId=&status=，返回 AlertInfo[]
- PUT /api/alerts/[id] → 入参 { status }，标记已读/已处理

## 第4步：具体开发任务

### 4.1 预警引擎 src/lib/alertEngine.ts

核心函数，负责检测并创建各类预警：

#### checkMissedAlert(checkInId: string): Promise<void>
1. 查询 CheckIn 记录
2. 查询对应 AlertSubscription，获取 missThresholdMinutes（默认60）
3. 判断条件：scheduledTime + thresholdMinutes < now() && missed=false && actualTime=null
4. 查询该患者的所有家属（FamilyBinding 中 role=FAMILY 的）
5. 为每位家属创建 ORANGE 预警
6. Alert 内容：
   - title: "漏服提醒"
   - message: "{患者名} 在 {时间} 的 {药名} {剂量} 未按时服用，已超过{分钟}分钟"
7. 更新 missedAlertSent = true

#### checkInventoryAlert(inventoryId: string): Promise<void>
1. 查询 MedicineInventory + Medicine
2. 条件：remainingCount <= alertThreshold && remainingCount > 0
3. 为所有绑定家属创建 YELLOW 预警
4. Alert 内容：
   - title: "库存不足"
   - message: "{药名} 剩余仅 {remainingCount} {unit}，请及时补充"

#### checkSideEffectAlert(soapRecordId: string): Promise<void>
1. 查询 SOAPRecord
2. 条件：symptomSeverity === 'SEVERE'
3. 为所有绑定家属创建 RED 预警
4. Alert 内容：
   - title: "严重副作用反馈"
   - message: "{患者名} 反馈严重副作用：{symptomTags}"

#### createAlertForAllFamilyMembers(patientId: string, alertData: {...}): Promise<void>
工具函数，查询所有家属并批量创建预警。

### 4.2 预警列表 API src/app/api/alerts/route.ts

GET 方法：
1. 从 query 获取 targetUserId, status（可选筛选）
2. 查询 Alert 记录，按 createdAt 降序
3. 关联 sourceUser 获取患者名
4. 返回 AlertInfo[]

### 4.3 标记预警 API src/app/api/alerts/[id]/route.ts

PUT 方法：
1. 入参 { status: 'READ' | 'RESOLVED' }
2. 如果 status='READ'，更新 readAt
3. 更新 Alert 状态
4. 返回 AlertInfo

### 4.4 预警触发集成

在以下位置插入预警检测调用：

1. **打卡 API**（Task-04）- POST /api/checkins 成功后：
   不在此触发（打卡成功说明没漏服）

2. **漏服检测 cron**（Task-04）- src/app/api/cron/check-missed/route.ts：
   标记 missed=true 后，调用 checkMissedAlert(checkInId)

3. **库存扣减**（Task-05）- deductInventory() 中：
   扣减后调用 checkInventoryAlert(inventoryId)

4. **SOAP 记录**（Task-06）- POST /api/soap 保存后：
   如果 symptomSeverity === 'SEVERE'，调用 checkSideEffectAlert(soapRecordId)

### 4.5 家属端预警页面 src/app/(family)/alerts/page.tsx

- 预警列表，按时间降序
- 使用 AlertBadge 组件分级展示（红/橙/黄）
- 每项显示：等级标签、标题、内容摘要、时间
- 未读项蓝色左边框高亮
- 点击标记为"已读"
- 顶部筛选：全部/未读/已读/已处理
- 顶部未读计数角标

### 4.6 患者端提醒设置页 src/app/(patient)/profile/alerts/page.tsx

预警偏好设置：
- 漏服提醒开关（默认开）
- 漏服提醒阈值（默认60分钟，可选30/60/90/120）
- 库存不足提醒开关（默认开）
- 副作用提醒开关（默认开）
- 保存按钮

调用 API：
- GET /api/alerts/subscription → 获取当前设置
- PUT /api/alerts/subscription → 更新设置

需要新增 API 路由：
- src/app/api/alerts/subscription/route.ts

### 4.7 预警订阅 API

#### GET /api/alerts/subscription
1. 从 token 获取 userId
2. 查询 AlertSubscription，不存在则创建默认设置
3. 返回设置

#### PUT /api/alerts/subscription
1. 从 token 获取 userId
2. 更新设置

## 第5步：测试要求
- 模拟漏服场景，验证 ORANGE 预警生成
- 模拟低库存，验证 YELLOW 预警生成
- 模拟严重副作用 SOAP 记录，验证 RED 预警生成
- 测试家属端预警列表的筛选和已读功能
- npm run build 无报错

## 第6步：提交代码
git add .
git commit -m "feat: 预警系统 - 漏服/库存/副作用分级预警/家属推送/预警管理"
git push origin feature/alert-system
```

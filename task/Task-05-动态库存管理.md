# Task-05：动态库存管理

**前置条件：** Task-02（药品管理）、Task-04（服药打卡）
**预计复杂度：** 中
**批次：** 2（与 Task-04、Task-06 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保以下 task 已合并：feature/medicine-ocr, feature/patient-checkin

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/inventory

## 第3步：接口契约

### 已有 Prisma 模型
- MedicineInventory: id, medicineId(unique), totalCount, remainingCount, unit, alertThreshold
- CheckIn: id, userId, medicineId, scheduledTime, actualTime, missed
- Medicine: id, userId, name, dosage
- Alert: id, targetUserId, sourceUserId, level, title, message, status

### 已有 TypeScript 类型
```typescript
export interface InventoryInfo {
  id: string; medicineId: string; medicineName: string;
  totalCount: number; remainingCount: number; unit: string;
  alertThreshold: number; isLow: boolean;
}
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
```

### API 路由约定
- GET  /api/inventory → query ?userId=，返回 InventoryInfo[]
- POST /api/inventory → 入参 { medicineId, totalCount, unit, alertThreshold }，创建/更新库存

## 第4步：具体开发任务

### 4.1 库存列表 API src/app/api/inventory/route.ts

GET 方法：
1. 从 query 获取 userId
2. 查询该用户所有药品的库存记录（含 medicine 关联）
3. 计算 isLow = remainingCount <= alertThreshold
4. 按剩余量升序排列（最少的排最前）
5. 返回 InventoryInfo[]

POST 方法：
1. 入参 { medicineId, totalCount, unit, alertThreshold }
2. 使用 upsert（有则更新，无则创建）
3. 如果是更新：remainingCount 按比例调整 = 原remainingCount + (新totalCount - 原totalCount)，但不能小于0
4. 如果是新建：remainingCount = totalCount
5. 返回 InventoryInfo

### 4.2 打卡后自动扣减库存

在 Task-04 的 POST /api/checkins 打卡逻辑中增加库存扣减：
- 打卡成功后，查找对应 MedicineInventory
- remainingCount -= 1（但不能小于0）
- 如果扣减后 remainingCount <= 0：不创建预警（由用户自行管理）
- 如果扣减后 remainingCount <= alertThreshold 且 > 0：创建 YELLOW 预警

这部分逻辑可以写成一个独立函数放在 src/lib/inventory.ts：
```typescript
export async function deductInventory(medicineId: string): Promise<void>
export async function checkLowInventory(medicineId: string): Promise<void>
```

### 4.3 新旧药冲突检测

在 Task-02 的 POST /api/medicines 添加药品时增加冲突检测：
- 检测是否存在同名药品（name 相同）
- 存在同名药品时返回冲突提示：{ success: true, data: medicine, conflict: { existingId, existingName } }
- 前端提示用户：是否替换旧药品？替换则删除旧药品及关联记录

冲突检测函数放在 src/lib/inventory.ts：
```typescript
export async function detectMedicineConflict(userId: string, name: string): Promise<Medicine | null>
```

### 4.4 库存管理页面 src/app/(patient)/inventory/page.tsx

患者端库存管理界面：
- 库存列表卡片，每张显示：
  - 药品名（大号）
  - 进度条：剩余/总量（绿色→黄色→红色渐变）
  - 剩余数量大字显示："还剩 12 片"
  - 低库存时红色闪烁提示 + "需要补充"标签
- 每个药品可点击进入编辑库存
- 顶部 "总览" 卡片：药品总数、今日已服用数、低库存警告数
- 底部按钮："补充库存" → 弹窗输入补充数量

进度条样式：
- remainingCount / totalCount > 0.3: 绿色
- 0.1 ~ 0.3: 黄色
- < 0.1: 红色

### 4.5 复诊提醒功能

在库存管理页面中增加：
- 每个药品可选填"复诊日期"
- MedicineInventory 增加字段？不对，不能修改 Schema
- 使用 Medicine 的 note 字段存储复诊日期 JSON：{ "nextVisit": "2026-05-15" }
- 复诊日期前3天在页面顶部显示提醒

## 第5步：测试要求
- 测试库存初始化、手动补充
- 测试打卡后自动扣减库存
- 测试低库存预警触发
- 测试新旧药冲突检测
- npm run build 无报错

## 第6步：提交代码
git add .
git commit -m "feat: 动态库存管理 - 自动扣减/低库存预警/冲突检测/库存管理页面"
git push origin feature/inventory
```

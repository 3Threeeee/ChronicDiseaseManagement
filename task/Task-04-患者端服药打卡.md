# Task-04：患者端 - 服药打卡页面

**前置条件：** Task-01（认证）、Task-02（药品管理）、Task-03（UI组件库）
**预计复杂度：** 高
**批次：** 2（与 Task-05、Task-06 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保以下 task 已合并：feature/auth-system, feature/medicine-ocr, feature/ui-components

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/patient-checkin

## 第3步：接口契约

### 已有 Prisma 模型
- CheckIn: id, userId, medicineId, scheduledTime, actualTime, missed, missedAlertSent, confirmType
- Medicine: id, userId, name, dosage, frequency, scheduleJson, note

### 已有 TypeScript 类型
```typescript
export interface CheckInInfo {
  id: string; userId: string; medicineId: string;
  medicineName: string; dosage: string;
  scheduledTime: string; actualTime?: string;
  missed: boolean; confirmType?: 'swipe' | 'manual';
}
export interface TodaySchedule { date: string; items: CheckInInfo[]; }
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
```

### API 路由约定
- GET  /api/checkins/today   → query ?userId=，返回 TodaySchedule
- POST /api/checkins         → 入参 { medicineId, scheduledTime, confirmType }，返回 CheckInInfo
- GET  /api/checkins/history → query ?userId=&startDate=&endDate=，返回 CheckInInfo[]

## 第4步：具体开发任务

### 4.1 今日打卡 API src/app/api/checkins/today/route.ts

GET 方法：
1. 从 query 获取 userId
2. 查询该用户所有药品（含 scheduleJson）
3. 获取今天的日期（YYYY-MM-DD）
4. 遍历每个药品的 scheduleJson 时间点，生成今日所有待打卡项
5. 查询今日已有 CheckIn 记录，匹配到对应时间点
6. 构建 TodaySchedule 返回：
   - 当前时间之前的未打卡项 → status: 'missed'
   - 已打卡项 → status: 'done'
   - 当前时间正负30分钟内的 → status: 'current'
   - 未来时间点 → status: 'upcoming'

排序规则：按时间升序，已完成的排在后面。

### 4.2 执行打卡 API src/app/api/checkins/route.ts

POST 方法：
1. 入参验证：medicineId, scheduledTime, confirmType（"swipe" 或 "manual"）
2. 从 token 获取 userId
3. 创建 CheckIn 记录，actualTime = now()
4. 返回 CheckInInfo

### 4.3 历史打卡 API src/app/api/checkins/history/route.ts

GET 方法：
1. 从 query 获取 userId, startDate, endDate（必填）
2. 查询 CheckIn 记录，按 scheduledTime 降序
3. 关联 Medicine 获取药品名称和剂量
4. 返回 CheckInInfo[]

### 4.4 服药打卡主页面 src/app/(patient)/checkin/page.tsx

核心页面，患者端最重要的界面：

**布局：**
- 顶部：日期显示（大号，如"2026年4月26日 星期日"）
- 主体：Timeline 组件展示今日服药任务
- 底部：NavBar（服药 tab 高亮）

**交互流程：**
1. 页面加载时调用 GET /api/checkins/today 获取今日任务
2. Timeline 展示所有时间点的任务
3. 点击 pending 或 current 状态的任务 → 弹出 SwipeConfirm 弹窗
4. 用户滑动确认 → 调用 POST /api/checkins 打卡
5. 打卡成功后刷新列表，该任务变为 done 状态
6. missed 状态的任务显示"已漏服"标记（红色），不可点击
7. 每30秒自动轮询刷新今日任务状态

**空状态：**
- 没有药品时 → EmptyState "还没有添加药品"，引导去药品管理页
- 今日无服药任务时 → "今日无服药任务 🎉"

### 4.5 服药日历页面 src/app/(patient)/checkin/history/page.tsx

- 日历视图（简易月历），大字号
- 点击日期查看当天打卡记录
- 打卡日期绿色圆点标记，漏服日期红色圆点标记
- 下方展示选中日期的打卡详情列表（Timeline 组件，只读模式）

### 4.6 患者端布局 src/app/(patient)/layout.tsx

患者端通用布局：
- 顶部状态栏：问候语（"早上好/下午好/晚上好，{name}"）
- 主内容区
- 底部 NavBar（role='patient'）

## 第5步：定时任务 - 自动标记漏服

创建 src/lib/scheduler.ts：
- 导出一个 checkMissedCheckins 函数
- 查询所有 scheduledTime < now() - 1小时 且 missed=false 且 actualTime=null 的 CheckIn
- 将这些记录标记为 missed=true
- 可选：通过 API 路由 /api/cron/check-missed 暴露，由 Vercel Cron Job 定时调用

对应的 API：src/app/api/cron/check-missed/route.ts

## 第6步：测试要求
- 完整测试：创建药品 → 进入打卡页 → 查看时间轴 → 滑动确认 → 打卡成功
- 测试漏服标记逻辑
- 测试日历视图的日期切换
- npm run build 无报错

## 第7步：提交代码
git add .
git commit -m "feat: 患者端服药打卡 - 今日任务时间轴/滑动确认/历史日历/自动漏服检测"
git push origin feature/patient-checkin
```

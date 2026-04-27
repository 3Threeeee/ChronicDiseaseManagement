# Task-07：家属端监控面板

**前置条件：** Task-01（认证）、Task-04（服药打卡）、Task-05（库存管理）、Task-06（SOAP档案）
**预计复杂度：** 中
**批次：** 3（与 Task-08 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保以下 task 已合并：feature/auth-system, feature/patient-checkin, feature/inventory, feature/soap-records, feature/ui-components

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/family-monitor

## 第3步：接口契约

### 已有 API 可复用：
- GET /api/family/patients  → 家属绑定的患者列表
- GET /api/checkins/today?userId= → 患者今日打卡
- GET /api/inventory?userId= → 患者库存
- GET /api/soap?userId= → 患者SOAP记录
- GET /api/alerts?targetUserId= → 预警列表

### 已有 TypeScript 类型：
UserProfile, CheckInInfo, InventoryInfo, SOAPRecordInfo, AlertInfo, ApiResponse

## 第4步：具体开发任务

### 4.1 患者综合状态 API src/app/api/family/patient-status/[patientId]/route.ts

GET 方法 — 聚合查询，一次返回患者所有关键信息：

```typescript
{
  profile: UserProfile;
  todayCheckins: CheckInInfo[];       // 今日所有打卡项
  todayProgress: {
    total: number;     // 今日总任务数
    done: number;      // 已完成数
    missed: number;    // 已漏服数
    pending: number;   // 待完成数
    rate: number;      // 完成率 0-100
  };
  inventoryAlerts: InventoryInfo[];   // 低库存药品
  latestSOAP: SOAPRecordInfo | null;  // 最近一次SOAP
  unreadAlerts: number;               // 未读预警数
}
```

### 4.2 家属端患者列表页 src/app/(family)/monitor/page.tsx

家属端核心监控面板：

**布局：**
- 顶部：标题"家人健康监控"
- 患者卡片列表（绑定多个患者时多张卡片）

**每张患者卡片展示：**
- 患者姓名（大号）、头像
- 今日服药进度环（done/total，绿色环形图）
- 进度文字："已完成 3/4（75%）"
- 漏服标记：有漏服时橙色感叹号
- 库存状态：低库存时黄色图标+数字
- 最近SOAP症状简述（如有）
- 未读预警数红点角标

**点击卡片进入患者详情**

### 4.3 患者详情页 src/app/(family)/monitor/[patientId]/page.tsx

**TAB 1 - 服药进度：**
- 调用 GET /api/checkins/today?userId=
- Timeline 组件展示今日任务（只读模式）
- done 项绿色，missed 项红色，pending 项灰色
- 实时进度条动画

**TAB 2 - 库存状态：**
- 调用 GET /api/inventory?userId=
- 库存列表，低库存高亮显示
- 进度条显示余量

**TAB 3 - 健康记录：**
- 调用 GET /api/soap?userId=
- SOAP 记录摘要列表
- 症状趋势（最近几次的严重程度变化）
- 体征关键指标最近值

**TAB 4 - 预警历史：**
- 调用 GET /api/alerts?targetUserId=
- AlertBadge 分级展示
- 按时间降序

### 4.4 家属端布局 src/app/(family)/layout.tsx

- 顶部标题栏："家人守护"
- 主内容区
- 底部 NavBar（role='family'）

### 4.5 添加家人页面 src/app/(family)/bind/page.tsx

- 输入框：患者手机号
- 大号按钮："添加家人"
- 调用 POST /api/family/bind
- 成功后显示"绑定成功"
- 已有绑定列表，显示已绑定的患者姓名和头像

## 第5步：测试要求
- 准备2个账号（1个患者+1个家属），测试绑定流程
- 患者打卡后，家属端查看进度同步
- 测试患者详情4个TAB切换
- npm run build 无报错

## 第6步：提交代码
git add .
git commit -m "feat: 家属端监控面板 - 患者状态聚合/进度监控/库存/健康记录"
git push origin feature/family-monitor
```

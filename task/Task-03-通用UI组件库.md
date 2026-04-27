# Task-03：通用 UI 组件库

**前置条件：** Task-00 架构初始化完成
**预计复杂度：** 中
**批次：** 1（与 Task-01、Task-02 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/ui-components

## 第3步：TailwindCSS 主题配置说明

你的组件使用以下 Tailwind 扩展类名（来自 Task-00 的 tailwind.config.ts）：
- 字号：text-xl-patient, text-2xl-patient, text-3xl-patient, text-4xl-patient
- 颜色：patient-primary(#2563EB), patient-success(#16A34A), patient-warning(#F59E0B), patient-danger(#DC2626), patient-bg(#F8FAFC)
- 预警色：alert-yellow, alert-orange, alert-red（背景），alert-yellowText, alert-orangeText, alert-redText（文字）

## 第4步：组件清单

### 4.1 BigButton - 大号按钮 src/components/ui/BigButton.tsx

Props:
- variant: 'primary' | 'success' | 'warning' | 'danger' | 'outline'
- size: 'lg' | 'xl'
- loading?: boolean
- disabled?: boolean
- className?: string
- children: React.ReactNode
- onClick?: () => void

样式要求：
- lg: px-6 py-3, text-xl-patient, 圆角 rounded-2xl
- xl: px-8 py-4, text-2xl-patient, 圆角 rounded-2xl
- primary: bg-patient-primary, white 文字
- success: bg-patient-success, white 文字
- warning: bg-patient-warning, white 文字
- danger: bg-patient-danger, white 文字
- outline: border-2 border-patient-primary, text-patient-primary
- loading 时显示旋转动画+禁用点击
- disabled 时 opacity-50 + cursor-not-allowed
- 点击有 scale-95 按压反馈动画

### 4.2 Timeline - 垂直时间轴 src/components/ui/Timeline.tsx

Props:
- items: TimelineItem[]
- onItemClick?: (item: TimelineItem) => void
- onSwipeConfirm?: (item: TimelineItem) => void

```typescript
interface TimelineItem {
  id: string;
  time: string;        // "08:00"
  title: string;       // "阿司匹林"
  subtitle?: string;   // "500mg"
  status: 'pending' | 'done' | 'missed' | 'upcoming';
  current?: boolean;   // 当前时间点高亮
}
```

样式要求：
- 左侧时间，右侧内容，中间连接线
- pending: 灰色圆点
- done: 绿色圆点+勾
- missed: 红色圆点+叉
- upcoming: 蓝色圆点
- current: 脉冲动画+大号圆点
- 整项可点击
- 大字号：时间 text-2xl-patient，标题 text-xl-patient

### 4.3 SwipeConfirm - 滑动确认弹窗 src/components/ui/SwipeConfirm.tsx

Props:
- isOpen: boolean
- onConfirm: () => void
- onCancel: () => void
- title: string          // "确认服药 - 阿司匹林"
- subtitle?: string      // "500mg - 08:00"
- confirmText?: string   // 默认"滑动确认服药"

交互要求（核心体验，防止误触）：
- 全屏蒙层，显示药品信息和确认区域
- 底部有一个滑动条："→ 滑动确认服药 →"
- 滑块从左侧滑到右侧才触发 onConfirm
- 滑块在手指标志的引导下从左向右滑动
- 未滑到底松开自动回弹
- 底部"取消"按钮
- 使用 touch 事件实现（onTouchStart, onTouchMove, onTouchEnd）
- 大号设计：弹窗文字 text-2xl-patient 以上

### 4.4 EmotionPicker - 表情症状选择器 src/components/ui/EmotionPicker.tsx

Props:
- selected: string[]
- onChange: (tags: string[]) => void
- className?: string

预设症状标签（带表情）：
```typescript
const SYMPTOM_OPTIONS = [
  { emoji: '😵', label: '头晕' },
  { emoji: '🤢', label: '恶心' },
  { emoji: '😫', label: '乏力' },
  { emoji: '😴', label: '嗜睡' },
  { emoji: '🤕', label: '头痛' },
  { emoji: '😤', label: '胸闷' },
  { emoji: '💊', label: '无不适' },
  { emoji: '😊', label: '感觉良好' },
];
```

样式要求：
- 网格布局 grid-cols-4，大号表情 text-4xl
- 选中状态：蓝色边框+浅蓝背景
- 未选中：灰色边框+白色背景
- 点击切换选中/取消

### 4.5 SeverityBadge - 严重程度标签 src/components/ui/SeverityBadge.tsx

Props:
- severity: 'MILD' | 'MODERATE' | 'SEVERE'

样式：
- MILD: 黄色背景+黄色文字，"轻微"
- MODERATE: 橙色背景+橙色文字，"中度"
- SEVERE: 红色背景+红色文字，"重度"

### 4.6 AlertBadge - 预警等级标签 src/components/ui/AlertBadge.tsx

Props:
- level: 'YELLOW' | 'ORANGE' | 'RED'
- showIcon?: boolean

样式：
- YELLOW: alert-yellow 背景 + alert-yellowText 文字，"⚠ 库存不足"
- ORANGE: alert-orange 背景 + alert-orangeText 文字，"⚠ 漏服提醒"
- RED: alert-red 背景 + alert-redText 文字，"🔴 严重副作用"

### 4.7 BigInput - 大号输入框 src/components/ui/BigInput.tsx

Props:
- type?: string (默认 text)
- placeholder?: string
- value: string
- onChange: (value: string) => void
- error?: string
- label?: string

样式：
- label: text-xl-patient font-medium
- input: text-2xl-patient, p-4, rounded-2xl, border-2, w-full
- error: 红色边框+红色错误提示文字
- focus: 蓝色边框+ring

### 4.8 NavBar - 底部导航栏 src/components/ui/NavBar.tsx

Props:
- items: { label: string; icon: string; href: string; active: boolean }[]
- role: 'patient' | 'family'

患者端导航项：
- 首页 (🏠) → /
- 服药 (💊) → /patient/checkin
- 记录 (📋) → /patient/soap
- 我的 (👤) → /patient/profile

家属端导航项：
- 首页 (🏠) → /
- 监控 (📊) → /family/monitor
- 预警 (🔔) → /family/alerts
- 我的 (👤) → /family/profile

样式：
- 固定在底部，白色背景+顶部阴影
- 大号图标 text-2xl，大号文字 text-lg
- active 状态：蓝色文字和图标

### 4.9 LoadingSpinner - 加载动画 src/components/ui/LoadingSpinner.tsx

Props:
- size?: 'sm' | 'lg'
- text?: string

样式：旋转圆环动画+大号文字提示

### 4.10 EmptyState - 空状态占位 src/components/ui/EmptyState.tsx

Props:
- icon?: string（默认 📭）
- title: string
- description?: string
- action?: { label: string; onClick: () => void }

## 第5步：组件导出 index 文件

创建 src/components/ui/index.ts，统一导出所有组件。

## 第6步：测试要求
- 每个组件需确保 TypeScript 类型正确
- 滑动确认组件需要在移动端测试滑动体验
- 确保所有组件在大字号下显示正常
- npm run build 无报错

## 第7步：提交代码
git add .
git commit -m "feat: 通用UI组件库 - 大号按钮/时间轴/滑动确认/表情选择器/预警标签/导航栏"
git push origin feature/ui-components
```

# Task-00：架构初始化

**前置条件：** 无
**预计复杂度：** 中
**批次：** 0（必须最先完成，串行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：初始化 Git 仓库
cd d:\Trae_workspace\Chronic_disease_management
git init

## 第2步：创建工作分支
git checkout -b feature/arch-init

## 第3步：初始化 Next.js 项目
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack

## 第4步：安装核心依赖
npm install prisma @prisma/client next-auth bcryptjs jsonwebtoken
npm install -D @types/bcryptjs @types/jsonwebtoken

## 第5步：配置 TailwindCSS
修改 tailwind.config.ts，添加以下大字号主题配置，适配老年患者。完整配置参考 decompose.md 中的技术栈说明。

核心扩展：
- fontSize: xl-patient, 2xl-patient, 3xl-patient, 4xl-patient（逐步增大字号）
- colors: patient.primary/success/warning/danger/bg, alert.yellow/orange/red 三级预警色

## 第6步：创建目录结构
在 src/ 下创建：
- app/(patient)/    患者端页面组
- app/(family)/     家属端页面组
- app/api/           API 路由
- app/login/         登录页
- components/ui/     通用 UI 组件
- components/patient/ 患者端专用组件
- components/family/  家属端专用组件
- lib/               工具函数
- hooks/             自定义 Hooks
- types/             类型定义

## 第7步：初始化 Prisma
执行：npx prisma init --datasource-provider postgresql

将 prisma/schema.prisma 替换为以下完整内容（严格按此Schema，不可修改）：

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role { PATIENT FAMILY }
enum Gender { MALE FEMALE OTHER }
enum Severity { MILD MODERATE SEVERE }
enum AlertLevel { YELLOW ORANGE RED }
enum AlertStatus { UNREAD READ RESOLVED }

model User {
  id            String    @id @default(cuid())
  phone         String    @unique
  passwordHash  String
  name          String
  role          Role
  gender        Gender?
  birthDate     DateTime?
  avatarUrl     String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  bindingsAsPatient   FamilyBinding[]  @relation("Patient")
  bindingsAsFamily    FamilyBinding[]  @relation("Family")
  medicines           Medicine[]
  checkIns            CheckIn[]
  soapRecords         SOAPRecord[]
  alertSubscriptions  AlertSubscription[]
  deviceTokens        DeviceToken[]
}

model FamilyBinding {
  id          String    @id @default(cuid())
  patientId   String
  familyId    String
  verified    Boolean   @default(false)
  createdAt   DateTime  @default(now())
  patient     User      @relation("Patient", fields: [patientId], references: [id])
  family      User      @relation("Family", fields: [familyId], references: [id])
  @@unique([patientId, familyId])
}

model Medicine {
  id          String    @id @default(cuid())
  userId      String
  name        String
  dosage      String
  frequency   String
  scheduleJson String
  note        String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  user        User      @relation(fields: [userId], references: [id])
  inventory   MedicineInventory?
  prescriptions MedicinePrescription[]
}

model MedicineInventory {
  id          String    @id @default(cuid())
  medicineId  String    @unique
  totalCount  Int
  remainingCount Int
  unit        String
  alertThreshold Int    @default(5)
  updatedAt   DateTime  @updatedAt
  medicine    Medicine  @relation(fields: [medicineId], references: [id])
}

model MedicinePrescription {
  id          String    @id @default(cuid())
  medicineId  String
  imageUrl    String?
  ocrRawText  String?
  ocrResultJson String?
  doctorName  String?
  hospitalName String?
  prescribedAt DateTime?
  createdAt   DateTime  @default(now())
  medicine    Medicine  @relation(fields: [medicineId], references: [id])
}

model CheckIn {
  id          String    @id @default(cuid())
  userId      String
  medicineId  String
  scheduledTime DateTime
  actualTime    DateTime?
  missed        Boolean  @default(false)
  missedAlertSent Boolean @default(false)
  confirmType   String?
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
  medicine    Medicine  @relation(fields: [medicineId], references: [id])
}

model SOAPRecord {
  id          String    @id @default(cuid())
  userId      String
  subjectiveNote    String?
  symptomSeverity   Severity?
  symptomTags       String?
  bloodPressure    String?
  bloodSugar       Float?
  heartRate        Int?
  weight           Float?
  temperature      Float?
  assessmentNote   String?
  adherenceRate    Float?
  reportJson       String?
  recordedAt       DateTime  @default(now())
  createdAt        DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
}

model Alert {
  id          String      @id @default(cuid())
  targetUserId  String
  sourceUserId  String
  level       AlertLevel
  title       String
  message     String
  status      AlertStatus  @default(UNREAD)
  relatedCheckInId  String?
  relatedMedicineId String?
  createdAt   DateTime    @default(now())
  readAt      DateTime?
  targetUser  User      @relation("AlertTarget", fields: [targetUserId], references: [id])
  sourceUser  User      @relation("AlertSource", fields: [sourceUserId], references: [id])
}

model AlertSubscription {
  id          String    @id @default(cuid())
  userId      String
  missAlertEnabled   Boolean  @default(true)
  inventoryAlertEnabled Boolean @default(true)
  sideEffectAlertEnabled Boolean @default(true)
  missThresholdMinutes  Int   @default(60)
  user        User      @relation(fields: [userId], references: [id])
}

model DeviceToken {
  id          String    @id @default(cuid())
  userId      String
  token       String
  platform    String
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
}
```

执行：npx prisma generate

## 第8步：创建共享类型定义文件 src/types/index.ts

内容参见 decompose.md 第2.2节。包含：UserProfile, LoginRequest, RegisterRequest, AuthResponse, MedicineInfo, MedicineCreateInput, OcrResult, InventoryInfo, CheckInInfo, TodaySchedule, SOAPRecordInfo, AlertInfo, ApiResponse, PaginatedResponse。

## 第9步：创建 Prisma 客户端单例 src/lib/prisma.ts
标准的 Prisma 全局单例模式，开发环境热重载复用以避免连接数过多。

## 第10步：创建认证中间件 src/middleware.ts
- 白名单路径：/login, /register, /api/auth/login, /api/auth/register
- 从 cookie 或 Authorization header 获取 JWT token
- 无 token 时：API 返回 401，页面重定向到 /login
- matcher 排除静态资源

## 第11步：创建 .env.example
包含：DATABASE_URL, JWT_SECRET, NEXTAUTH_SECRET, NEXTAUTH_URL, VISION_API_KEY, VISION_API_URL

## 第12步：创建布局框架
- src/app/layout.tsx：根布局，lang="zh-CN"
- src/app/page.tsx：首页，展示"患者/家属"身份选择入口，使用大字号
- src/app/globals.css：仅保留 Tailwind 指令

## 第13步：验证构建
npm run build
确保构建无报错。

## 第14步：提交代码
git add .
git commit -m "feat: 架构初始化 - Prisma Schema、类型定义、中间件、项目骨架"
git push origin feature/arch-init
```

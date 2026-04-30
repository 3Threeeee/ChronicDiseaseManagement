# 慢病用药小管家

面向慢病患者的智能用药管理平台。支持患者端（大字号、极简交互）和家属端（实时监控、分级预警），通过 AI 视觉识别处方、自动生成服药时间轴、动态扣减库存，并基于 SOAP 临床框架生成复诊参考报告。

***

## 环境要求

- **Node.js** >= 20
- **SQLite**（内置，无需额外安装）
- 可选：DeepSeek / Kimi / OpenAI 等大模型 API 密钥（用于 OCR 处方识别）

***

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/3Threeeee/ChronicDiseaseManagement.git
cd ChronicDiseaseManagement
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 为 `.env`，按实际情况填写：

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="你的JWT签名密钥（建议随机长字符串）"
NEXTAUTH_SECRET="你的NextAuth密钥"
NEXTAUTH_URL="http://localhost:3000"
VISION_API_KEY="你的大模型API密钥（可选，不配则OCR功能不可用）"
VISION_API_URL="https://api.deepseek.com/v1/chat/completions"
```

### 4. 初始化数据库

```bash
npx prisma generate
```

### 5. 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:3000`。

***

## Docker 部署

项目已包含 `Dockerfile` 和 `docker-compose.yml`，一键启动：

```bash
docker compose up -d
```

这会同时启动 Next.js 应用（端口 3000）。

### 宝塔面板部署

1. 软件商店安装：**PM2管理器**
2. 上传项目文件到 `/www/wwwroot/chronic-disease`
3. 配置 `.env` 文件
4. PM2 添加项目，启动文件 `node_modules/.bin/next`，参数 `start`，端口 `3000`
5. 网站 → 添加站点 → 反向代理到 `http://127.0.0.1:3000` → 申请 SSL

***

## 技术栈

| 层级  | 技术                                                  |
| --- | --------------------------------------------------- |
| 框架  | Next.js 16 (App Router + Turbopack)                 |
| 语言  | TypeScript                                          |
| 样式  | Tailwind CSS 4                                      |
| ORM | Prisma 5                                            |
| 数据库 | SQLite                                              |
| 认证  | JWT + bcryptjs                                      |
| 大模型 | DeepSeek / Kimi / OpenAI 等兼容 OpenAI 格式的 API（处方 OCR） |
| 部署  | Docker / Vercel / 宝塔面板                              |

***

## 项目结构

```
src/
├── app/
│   ├── (patient)/         # 患者端页面
│   │   ├── checkin/       # 服药打卡
│   │   ├── medicines/     # 药品管理
│   │   ├── inventory/     # 库存管理
│   │   ├── soap/          # SOAP 临床档案
│   │   └── profile/       # 个人设置（含 AI 识别配置入口）
│   ├── (family)/          # 家属端页面
│   │   ├── monitor/       # 监控面板
│   │   ├── alerts/        # 预警消息
│   │   └── bind/          # 绑定患者
│   ├── api/               # 后端 API（20个端点）
│   ├── login/             # 登录页
│   └── register/          # 注册页
├── components/
│   └── ui/                # 通用UI组件
│       └── OcrUpload.tsx  # AI 拍照识别组件
├── lib/                   # 业务工具库
│   ├── inventory.ts       # 库存扣减与预警
│   ├── alertEngine.ts     # 预警引擎
│   └── prisma.ts          # Prisma 客户端
├── types/                 # TypeScript 类型定义
└── generated/prisma/      # Prisma 生成代码
prisma/
└── schema.prisma          # 数据模型（10个模型）
```

***

## 功能架构

### 患者端（大字号 · 极简交互）

- **身份选择** → 首页选择"我是患者"进入

  ![Image](https://github.com/user-attachments/assets/b2aed44b-60d3-4543-a5b4-960c8a6439e1)

  ![]https://github.com/user-attachments/assets/920a57e9-27ab-45a5-8b02-02d9aee0fef2
- **服药打卡** → 垂直时间轴展示今日任务，**滑动确认服药**防止误触

  ![]https://github.com/user-attachments/assets/05c83f6d-1a9f-436f-be3a-8c5cec2e7bbc
- **库存管理** → 打卡自动扣减库存，低库存预警，新旧药冲突检测

  ![]https://github.com/user-attachments/assets/988d01af-362f-4941-8c28-0b825b180b18
- **SOAP 档案** → 表情勾选症状 + 体征数据录入 + 依从率统计 + 医生报告

  ![]https://github.com/user-attachments/assets/b2aed44b-60d3-4543-a5b4-960c8a6439e4

  ![]https://github.com/user-attachments/assets/86ff7342-8fe9-4ce0-957a-a4b4c78a9867
- **AI 识别配置** → "我的"页面右上角齿轮图标，可自定义 OCR 调用的 AI 大模型 API

  ![]https://github.com/user-attachments/assets/17b8438e-0cd4-4b4a-8352-8292ba0b9d62

### 家属端（监控 · 预警）

- **绑定患者** → 输入患者手机号建立监护关

  ![]https://github.com/user-attachments/assets/765a05fb-b36b-4b48-a0f9-159b3a4a7615
- **药品管理** → 手动添加药品，支持 **拍照 OCR** 自动识别处方/药盒

  ![]https://github.com/user-attachments/assets/57b9d5dd-26fd-4031-b1e2-a39062dffd00
- **监控面板** → 实时查看患者服药进度、库存状态、健康记录

  ![]https://github.com/user-attachments/assets/20007791-a0a5-47ac-a3f6-12d3668b2fcb
- **分级预警** → 黄色（库存不足）、橙色（漏服>1小时）、红色（严重副作用）

  ![]https://github.com/user-attachments/assets/79a0ed3e-3d4d-480a-bb23-e6920b9b2215

### 智能化

- **OCR 处方识别** → 拍照自动提取药品名称、剂量、频次，自动生成服药时间轴。支持在"我的 → 设置"中自定义 AI 大模型 API（地址、密钥、模型名），默认使用服务端环境变量配置
- **库存智能扣减** → 打卡联动库存，低于阈值自动预警
- **依从率分析** → 过去30天打卡率自动计算，纳入医生报告

***

## API 接口一览

### 认证

| 方法   | 路由                   | 说明     |
| ---- | -------------------- | ------ |
| POST | `/api/auth/register` | 用户注册   |
| POST | `/api/auth/login`    | 用户登录   |
| GET  | `/api/auth/me`       | 获取当前用户 |

### 药品

| 方法     | 路由                    | 说明                        |
| ------ | --------------------- | ------------------------- |
| GET    | `/api/medicines`      | 药品列表                      |
| POST   | `/api/medicines`      | 添加药品                      |
| PUT    | `/api/medicines/[id]` | 更新药品                      |
| DELETE | `/api/medicines/[id]` | 删除药品                      |
| POST   | `/api/medicines/ocr`  | OCR 识别处方（支持自定义 AI API 配置） |

### 打卡

| 方法   | 路由                      | 说明     |
| ---- | ----------------------- | ------ |
| GET  | `/api/checkins/today`   | 今日服药计划 |
| POST | `/api/checkins`         | 执行打卡   |
| GET  | `/api/checkins/history` | 历史打卡   |

### 库存

| 方法   | 路由               | 说明   |
| ---- | ---------------- | ---- |
| GET  | `/api/inventory` | 库存列表 |
| POST | `/api/inventory` | 更新库存 |

### SOAP 档案

| 方法   | 路由                 | 说明     |
| ---- | ------------------ | ------ |
| GET  | `/api/soap`        | 档案列表   |
| POST | `/api/soap`        | 创建记录   |
| GET  | `/api/soap/report` | 生成医生报告 |

### 预警

| 方法      | 路由                         | 说明     |
| ------- | -------------------------- | ------ |
| GET     | `/api/alerts`              | 预警列表   |
| PUT     | `/api/alerts/[id]`         | 标记已读   |
| GET/PUT | `/api/alerts/subscription` | 预警偏好设置 |

### 家属

| 方法   | 路由                                | 说明     |
| ---- | --------------------------------- | ------ |
| GET  | `/api/family/patients`            | 绑定患者列表 |
| POST | `/api/family/bind`                | 绑定患者   |
| GET  | `/api/family/patient-status/[id]` | 患者综合状态 |

***

## AI 识别配置说明

OCR 处方识别功能支持**两种配置方式**：

### 方式一：服务端环境变量（默认）

在 `.env` 文件中配置：

```env
VISION_API_KEY="your-api-key"
VISION_API_URL="https://api.deepseek.com/v1/chat/completions"
```

### 方式二：前端自定义配置（推荐个人用户）

1. 登录患者端，进入"我的"页面
2. 点击右上角**齿轮图标**进入"AI 识别配置"
3. 填写自己的 API 地址、密钥和模型名称
4. 保存后即可使用自定义的 AI 服务进行处方识别

支持任何兼容 **OpenAI API 格式** 的大模型服务，如：

- DeepSeek
- Kimi (Moonshot)
- OpenAI
- 阿里云百炼
- 其他兼容服务商

***

## 数据库模型

| 模型                   | 说明          |
| -------------------- | ----------- |
| User                 | 用户（患者/家属）   |
| FamilyBinding        | 家属-患者绑定     |
| Medicine             | 药品（含服药时间表）  |
| MedicineInventory    | 药品库存        |
| MedicinePrescription | 处方/OCR 识别记录 |
| CheckIn              | 服药打卡记录      |
| SOAPRecord           | SOAP 临床档案   |
| Alert                | 分级预警消息      |
| AlertSubscription    | 预警订阅设置      |
| DeviceToken          | 设备推送令牌      |


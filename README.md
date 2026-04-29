# 慢病用药小管家

面向慢病患者的智能用药管理平台。支持患者端（大字号、极简交互）和家属端（实时监控、分级预警），通过 AI 视觉识别处方、自动生成服药时间轴、动态扣减库存，并基于 SOAP 临床框架生成复诊参考报告。

---

## 环境要求

- **Node.js** >= 20
- **PostgreSQL** >= 16
- 可选：DeepSeek / Kimi Vision API 密钥（用于 OCR 处方识别）

---

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
DATABASE_URL="postgresql://用户名:密码@localhost:5432/chronic_disease"
JWT_SECRET="你的JWT签名密钥（建议随机长字符串）"
NEXTAUTH_SECRET="你的NextAuth密钥"
NEXTAUTH_URL="http://localhost:3000"
VISION_API_KEY="你的大模型API密钥（可选，不配则OCR功能不可用）"
VISION_API_URL="https://api.deepseek.com/v1/chat/completions"
```

### 4. 初始化数据库

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:3000`。

---

## Docker 部署

项目已包含 `Dockerfile` 和 `docker-compose.yml`，一键启动：

```bash
docker compose up -d
```

这会同时启动 Next.js 应用（端口 3000）和 PostgreSQL 数据库（端口 5432）。

### 宝塔面板部署

1. 软件商店安装：**PM2管理器**、**PostgreSQL管理器**
2. 数据库 → 创建 PgSQL 数据库
3. 上传项目文件到 `/www/wwwroot/chronic-disease`
4. 配置 `.env` 文件
5. PM2 添加项目，启动文件 `node_modules/.bin/next`，参数 `start`，端口 `3000`
6. 网站 → 添加站点 → 反向代理到 `http://127.0.0.1:3000` → 申请 SSL

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router + Turbopack) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| ORM | Prisma 7 |
| 数据库 | PostgreSQL 16 |
| 认证 | JWT + bcryptjs |
| 大模型 | DeepSeek Vision API（处方 OCR） |
| 部署 | Docker / Vercel / 宝塔面板 |

---

## 项目结构

```
src/
├── app/
│   ├── (patient)/         # 患者端页面
│   │   ├── checkin/       # 服药打卡
│   │   ├── medicines/     # 药品管理
│   │   ├── inventory/     # 库存管理
│   │   ├── soap/          # SOAP 临床档案
│   │   └── profile/       # 个人设置
│   ├── (family)/          # 家属端页面
│   │   ├── monitor/       # 监控面板
│   │   ├── alerts/        # 预警消息
│   │   └── bind/          # 绑定患者
│   ├── api/               # 后端 API（20个端点）
│   ├── login/             # 登录页
│   └── register/          # 注册页
├── components/
│   └── ui/                # 通用UI组件（11个）
├── lib/                   # 业务工具库（7个模块）
├── types/                 # TypeScript 类型定义
└── proxy.ts               # 认证代理中间件
prisma/
└── schema.prisma          # 数据模型（10个模型+6个枚举）
```

---

## 功能架构

### 患者端（大字号 · 极简交互）

- **身份选择** → 首页选择"我是患者"进入
- **服药打卡** → 垂直时间轴展示今日任务，**滑动确认服药**防止误触
- **药品管理** → 手动添加药品，支持 **拍照 OCR** 自动识别处方/药盒
- **库存管理** → 打卡自动扣减库存，低库存预警，新旧药冲突检测
- **SOAP 档案** → 表情勾选症状 + 体征数据录入 + 依从率统计 + 医生报告

### 家属端（监控 · 预警）

- **绑定患者** → 输入患者手机号建立监护关系
- **监控面板** → 实时查看患者服药进度、库存状态、健康记录
- **分级预警** → 黄色（库存不足）、橙色（漏服>1小时）、红色（严重副作用）

### 智能化

- **OCR 处方识别** → 拍照自动提取药品名称、剂量、频次，自动生成服药时间轴
- **库存智能扣减** → 打卡联动库存，低于阈值自动预警
- **依从率分析** → 过去30天打卡率自动计算，纳入医生报告

---

## API 接口一览

### 认证
| 方法 | 路由 | 说明 |
|------|------|------|
| POST | `/api/auth/register` | 用户注册 |
| POST | `/api/auth/login` | 用户登录 |
| GET | `/api/auth/me` | 获取当前用户 |

### 药品
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/medicines` | 药品列表 |
| POST | `/api/medicines` | 添加药品 |
| PUT | `/api/medicines/[id]` | 更新药品 |
| DELETE | `/api/medicines/[id]` | 删除药品 |
| POST | `/api/medicines/ocr` | OCR 识别处方 |

### 打卡
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/checkins/today` | 今日服药计划 |
| POST | `/api/checkins` | 执行打卡 |
| GET | `/api/checkins/history` | 历史打卡 |

### 库存
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/inventory` | 库存列表 |
| POST | `/api/inventory` | 更新库存 |

### SOAP 档案
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/soap` | 档案列表 |
| POST | `/api/soap` | 创建记录 |
| GET | `/api/soap/report` | 生成医生报告 |

### 预警
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/alerts` | 预警列表 |
| PUT | `/api/alerts/[id]` | 标记已读 |
| GET/PUT | `/api/alerts/subscription` | 预警偏好设置 |

### 家属
| 方法 | 路由 | 说明 |
|------|------|------|
| GET | `/api/family/patients` | 绑定患者列表 |
| POST | `/api/family/bind` | 绑定患者 |
| GET | `/api/family/patient-status/[id]` | 患者综合状态 |

---

## 数据库模型

| 模型 | 说明 |
|------|------|
| User | 用户（患者/家属） |
| FamilyBinding | 家属-患者绑定 |
| Medicine | 药品（含服药时间表） |
| MedicineInventory | 药品库存 |
| MedicinePrescription | 处方/OCR 识别记录 |
| CheckIn | 服药打卡记录 |
| SOAPRecord | SOAP 临床档案 |
| Alert | 分级预警消息 |
| AlertSubscription | 预警订阅设置 |
| DeviceToken | 设备推送令牌 |

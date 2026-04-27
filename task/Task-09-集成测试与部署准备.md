# Task-09：集成测试与部署准备

**前置条件：** Task-01~08 全部完成并合并
**预计复杂度：** 低
**批次：** 4（串行，最后执行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保所有 feature 分支已合并：feature/arch-init, feature/auth-system, feature/medicine-ocr, feature/ui-components, feature/patient-checkin, feature/inventory, feature/soap-records, feature/family-monitor, feature/alert-system

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/integration

## 第3步：具体开发任务

### 3.1 路由整合

创建患者端路由组 src/app/(patient)/layout.tsx（如果某个 task 未创建，你需要补充）：
- 患者端通用布局
- 问候语："早上好/下午好/晚上好，{name}"
- 底部 NavBar（role='patient'）

创建家属端路由组 src/app/(family)/layout.tsx：
- 家属端通用布局
- 顶部标题栏
- 底部 NavBar（role='family'）

检查并完善所有页面路由：

患者端：
- / → 首页（身份选择）
- /login → 登录页
- /register → 注册页
- /patient → 患者首页（今日任务概览）
- /patient/checkin → 服药打卡主页
- /patient/checkin/history → 打卡历史日历
- /patient/medicines → 药品管理
- /patient/inventory → 库存管理
- /patient/soap → SOAP 录入
- /patient/soap/history → SOAP 历史
- /patient/soap/report → 医生报告
- /patient/profile → 个人中心
- /patient/profile/alerts → 预警设置

家属端：
- /family/monitor → 监控面板
- /family/monitor/[patientId] → 患者详情
- /family/alerts → 预警消息
- /family/bind → 绑定家人
- /family/profile → 个人中心

### 3.2 页面跳转流程验证

检查并修复以下关键流程：
1. 登录(PATIENT) → /patient → 可见今日任务
2. 点击药品 → /patient/medicines → 添加/编辑药品
3. 点击打卡 → SwipeConfirm → 打卡成功
4. 点击库存 → /patient/inventory → 查看库存
5. 点击SOAP → /patient/soap → 录入症状
6. 登录(FAMILY) → /family/monitor → 看到患者列表
7. 点击患者 → /family/monitor/[patientId] → 查看详情

### 3.3 响应式与移动端适配

- 所有页面在 375px 宽度（iPhone SE）下正常显示
- 所有按钮最小触摸区域 48x48px
- 输入框高度不低于 56px
- 页面最大宽度 480px，居中显示（移动优先）
- 添加 viewport meta：`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`
- 在 src/app/layout.tsx 中设置

### 3.4 全局错误处理

创建 src/app/error.tsx（Next.js error boundary）：
- 大字号错误提示
- "出错了" + 错误信息
- "重试"按钮

创建 src/app/not-found.tsx（404 页面）：
- 大字号
- "页面未找到"
- "返回首页"按钮

### 3.5 API 统一错误处理

创建 src/lib/apiHandler.ts：
```typescript
export function successResponse<T>(data: T): NextResponse {
  return NextResponse.json({ success: true, data });
}
export function errorResponse(error: string, status: number = 400): NextResponse {
  return NextResponse.json({ success: false, error }, { status });
}
```

统一所有 API 路由的错误处理格式。

### 3.6 环境变量确认

确保 .env.example 包含所有必要变量：
```
DATABASE_URL="postgresql://..."
JWT_SECRET="..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
VISION_API_KEY="..."
VISION_API_URL="https://api.deepseek.com/v1/chat/completions"
```

### 3.7 Docker 部署配置

创建 Dockerfile：

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npx prisma generate
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000
CMD ["node", "server.js"]
```

修改 next.config.js（或 next.config.mjs）添加 standalone 输出：
```javascript
const nextConfig = {
  output: 'standalone',
};
```

创建 docker-compose.yml：
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - VISION_API_KEY=${VISION_API_KEY}
      - VISION_API_URL=${VISION_API_URL}
    depends_on:
      - db
  db:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=chronic_disease
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```

### 3.8 数据库迁移

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 第4步：验证清单

- [ ] npm run build 无报错
- [ ] npm run lint 无严重警告
- [ ] 所有页面路由可访问
- [ ] 移动端 375px 宽度 UI 正常
- [ ] 登录→打卡→库存→SOAP完整流程跑通
- [ ] 家属端监控面板数据正常
- [ ] docker-compose up 启动成功

## 第5步：提交代码
git add .
git commit -m "feat: 集成测试与部署 - 路由整合/响应式适配/Docker部署/错误处理"
git push origin feature/integration
```

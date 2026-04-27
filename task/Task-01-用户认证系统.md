# Task-01：用户认证系统

**前置条件：** Task-00 架构初始化完成
**预计复杂度：** 中
**批次：** 1（与 Task-02、Task-03 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
确保 Task-00（feature/arch-init）已合并到 main，当前在主分支：
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/auth-system

## 第3步：接口契约（来自架构初始化，不可修改）

以下是你的模块需要用到的类型和数据模型：

### 已有 Prisma 模型（只读，不可修改 schema.prisma）
- User: id, phone, passwordHash, name, role(PATIENT|FAMILY), gender, birthDate, avatarUrl
- FamilyBinding: id, patientId, familyId, verified

### 已有 TypeScript 类型（来自 src/types/index.ts）
```typescript
export interface UserProfile {
  id: string; phone: string; name: string;
  role: 'PATIENT' | 'FAMILY'; gender?: 'MALE' | 'FEMALE' | 'OTHER';
  birthDate?: string; avatarUrl?: string;
}
export interface LoginRequest { phone: string; password: string; }
export interface RegisterRequest { phone: string; password: string; name: string; role: 'PATIENT' | 'FAMILY'; }
export interface AuthResponse { token: string; user: UserProfile; }
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
```

### API 路由约定
- POST /api/auth/register  → 入参 RegisterRequest，返回 AuthResponse
- POST /api/auth/login     → 入参 LoginRequest，返回 AuthResponse
- GET  /api/auth/me        → Header: Authorization: Bearer <token>，返回 UserProfile
- POST /api/family/bind    → 入参 { familyId, patientPhone }，返回 FamilyBinding
- GET  /api/family/patients → query ?familyId=，返回 UserProfile[]

## 第4步：具体开发任务

### 4.1 密码工具 src/lib/auth.ts
创建工具函数：
- hashPassword(password: string): Promise<string>  使用 bcryptjs，saltRounds=10
- verifyPassword(password: string, hash: string): Promise<boolean>
- generateToken(userId: string, role: string): string  使用 jsonwebtoken，签名 payload { userId, role }，有效期 7 天。密钥从环境变量 JWT_SECRET 读取
- verifyToken(token: string): { userId: string; role: string } | null  验证并解析 JWT

### 4.2 注册 API src/app/api/auth/register/route.ts
POST 方法：
1. 校验 phone（11位手机号正则）、password（至少6位）、name（不为空）、role（PATIENT 或 FAMILY）
2. 检查手机号是否已注册，已存在返回 { success: false, error: "该手机号已注册" }
3. 使用 hashPassword 加密
4. 创建 User 记录
5. 自动创建 AlertSubscription 记录（使用默认值）
6. 生成 token，返回 AuthResponse

### 4.3 登录 API src/app/api/auth/login/route.ts
POST 方法：
1. 根据 phone 查找用户，不存在返回 "手机号未注册"
2. 使用 verifyPassword 验证密码，失败返回 "密码错误"
3. 生成 token，返回 AuthResponse
4. 在 Response 中设置 httpOnly cookie: token=xxx; Path=/; Max-Age=604800

### 4.4 获取当前用户 API src/app/api/auth/me/route.ts
GET 方法：
1. 从 Authorization header 提取 token
2. 使用 verifyToken 解析
3. 根据 userId 查找用户，返回 UserProfile（排除 passwordHash）

### 4.5 家属绑定 API src/app/api/family/bind/route.ts
POST 方法：
1. 入参 { familyId, patientPhone }
2. 根据 patientPhone 查找患者用户，必须 role=PATIENT
3. 检查是否已绑定（防止重复）
4. 创建 FamilyBinding 记录，verified 默认为 true
5. 返回绑定记录

### 4.6 获取家属绑定的患者列表 src/app/api/family/patients/route.ts
GET 方法：
1. 从 query 参数获取 familyId
2. 查询所有 FamilyBinding 记录（where: { familyId, verified: true }）
3. 关联查询 patient 信息，返回 UserProfile[]

### 4.7 登录页面 src/app/login/page.tsx
- 大字号设计，适配老年患者
- 切换选项卡：患者登录 / 家属登录
- 手机号输入框（大号、纯数字键盘 type="tel"）
- 密码输入框
- 登录按钮（大号、蓝色）
- "还没有账号？去注册" 链接
- 登录成功后根据 role 跳转：PATIENT → /patient, FAMILY → /family
- 使用 fetch API 调用 /api/auth/login，token 存储到 localStorage

### 4.8 注册页面 src/app/register/page.tsx
- 大字号设计
- 手机号、姓名、密码、确认密码、身份选择（患者/家属）
- 注册按钮
- "已有账号？去登录" 链接
- 注册成功后跳转到登录页

## 第5步：测试要求
- 手动测试注册流程（使用 curl 或页面表单）
- 验证 token 生成和解析
- 验证家属绑定功能
- 验证 token 过期后的 401 跳转

## 第6步：提交代码
git add .
git commit -m "feat: 用户认证系统 - 注册/登录API、JWT认证、家属绑定、登录注册页面"
git push origin feature/auth-system
```

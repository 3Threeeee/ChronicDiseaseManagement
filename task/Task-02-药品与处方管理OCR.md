# Task-02：药品与处方管理 + OCR 录入

**前置条件：** Task-00 架构初始化完成
**预计复杂度：** 高
**批次：** 1（与 Task-01、Task-03 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/medicine-ocr

## 第3步：接口契约（来自架构初始化）

### 已有 Prisma 模型
- Medicine: id, userId, name, dosage, frequency, scheduleJson, note
- MedicineInventory: id, medicineId(unique), totalCount, remainingCount, unit, alertThreshold
- MedicinePrescription: id, medicineId, imageUrl, ocrRawText, ocrResultJson, doctorName, hospitalName, prescribedAt

### 已有 TypeScript 类型
```typescript
export interface MedicineInfo {
  id: string; userId: string; name: string; dosage: string;
  frequency: string; scheduleJson: string; note?: string;
}
export interface MedicineCreateInput {
  name: string; dosage: string; frequency: string;
  schedule: string[];  // ["08:00","12:00","18:00"]
  note?: string;
}
export interface OcrResult {
  name: string; dosage: string; frequency: string;
  schedule: string[]; rawText: string; confidence: number;
}
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
```

### API 路由约定
- GET    /api/medicines        → query ?userId=，返回 MedicineInfo[]
- POST   /api/medicines        → 入参 MedicineCreateInput，返回 MedicineInfo
- PUT    /api/medicines/[id]   → 入参部分 MedicineCreateInput，返回 MedicineInfo
- DELETE /api/medicines/[id]   → 删除药品
- POST   /api/medicines/ocr    → FormData { image: File }，返回 OcrResult

## 第4步：具体开发任务

### 4.1 药品 CRUD API

#### src/app/api/medicines/route.ts
GET: 根据 userId 查询所有药品，按 createdAt 降序
POST:
1. 将 schedule 数组转为 JSON 字符串存入 scheduleJson
2. 创建 Medicine 记录
3. 自动创建 MedicineInventory 记录（totalCount=0, remainingCount=0, unit="片", alertThreshold=5）
4. 返回 MedicineInfo

#### src/app/api/medicines/[id]/route.ts
PUT: 更新药品信息，如果 schedule 有变化则更新 scheduleJson
DELETE: 级联删除关联的 MedicineInventory 和 MedicinePrescription

### 4.2 OCR 处方识别 API src/app/api/medicines/ocr/route.ts

使用 Vision API（DeepSeek/Kimi）识别药盒或处方照片：

1. 接收 FormData 中的 image 文件
2. 将图片转为 base64
3. 调用 Vision API，使用以下 prompt：

```
你是一个专业的处方/药盒识别助手。请分析这张图片，提取药品信息，以 JSON 格式返回：
{
  "name": "药品名称",
  "dosage": "单次剂量，如500mg",
  "frequency": "用药频次描述，如一日3次",
  "schedule": ["08:00", "12:00", "18:00"],
  "rawText": "原始识别文字",
  "confidence": 0.95
}

规则：
- frequency 中"一日1次"→schedule: ["08:00"]
- "一日2次"→schedule: ["08:00","20:00"]
- "一日3次"→schedule: ["08:00","12:00","18:00"]
- "饭前/饭后"等修饰语保留在 frequency 中，不影响 schedule
- confidence 表示识别置信度 0-1
```

4. 解析 Vision API 返回的 JSON
5. 返回 OcrResult

环境变量：
- VISION_API_KEY: API密钥
- VISION_API_URL: API地址（默认 https://api.deepseek.com/v1/chat/completions）

### 4.3 药品管理页面 src/app/(patient)/medicines/page.tsx

患者端药品管理界面（大字号适配）：
- 药品列表卡片，每张显示：药名、剂量、频次、服药时间点
- "添加药品"按钮 → 弹出表单
- 表单：药品名称、剂量(如500mg)、频次(一日3次)、服药时间点选择器
- 每个药品卡片有编辑和删除按钮
- 底部"拍照录入"大按钮 → 调用相机/相册 → OCR 识别 → 自动填表

### 4.4 OCR 拍照录入组件 src/components/patient/OcrUpload.tsx

- 大号拍照按钮
- 支持相机拍照和相册选择
- 上传后显示加载动画"AI识别中..."
- 识别结果展示：药名、剂量、频次、时间点
- 用户可手动修改识别结果
- 确认后调用 POST /api/medicines 保存
- 同时上传原始图片到 OCR 接口关联处方记录

### 4.5 服药时间点选择器 src/components/ui/TimePicker.tsx

简易时间选择器（大字号）：
- 预设时间按钮：08:00, 12:00, 18:00, 20:00
- 自定义时间输入
- 支持多选
- 选中状态高亮显示

## 第5步：测试要求
- 测试药品 CRUD 完整流程
- 准备一张药盒图片，测试 OCR 识别
- 验证 schedule 数组与 scheduleJson 转换正确
- 验证删除药品时级联删除关联记录

## 第6步：提交代码
git add .
git commit -m "feat: 药品管理+OCR - CRUD API、Vision API处方识别、药品管理页面"
git push origin feature/medicine-ocr
```

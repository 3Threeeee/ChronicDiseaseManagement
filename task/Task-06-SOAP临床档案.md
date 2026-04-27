# Task-06：SOAP 临床档案

**前置条件：** Task-01（认证）、Task-03（UI组件库）
**预计复杂度：** 中
**批次：** 2（与 Task-04、Task-05 并行）

---

## Agent 完整行动指令

```
你在工作目录 d:\Trae_workspace\Chronic_disease_management 执行以下操作：

## 第1步：确认前置条件
cd d:\Trae_workspace\Chronic_disease_management
git checkout main
git pull origin main

确保以下 task 已合并：feature/auth-system, feature/ui-components

## 第2步：创建 worktree 并切换到新分支
git checkout -b feature/soap-records

## 第3步：接口契约

### 已有 Prisma 模型
- SOAPRecord: id, userId, subjectiveNote, symptomSeverity(MILD|MODERATE|SEVERE),
  symptomTags(JSON字符串), bloodPressure, bloodSugar, heartRate, weight, temperature,
  assessmentNote, adherenceRate, reportJson, recordedAt
- CheckIn: id, userId, scheduledTime, missed  （用于计算依从率）

### 已有 TypeScript 类型
```typescript
export interface SOAPRecordInfo {
  id: string; userId: string;
  subjectiveNote?: string;
  symptomSeverity?: 'MILD' | 'MODERATE' | 'SEVERE';
  symptomTags?: string[];
  bloodPressure?: string; bloodSugar?: number;
  heartRate?: number; weight?: number; temperature?: number;
  assessmentNote?: string; adherenceRate?: number;
  reportJson?: string; recordedAt: string;
}
export interface ApiResponse<T = unknown> { success: boolean; data?: T; error?: string; }
export interface PaginatedResponse<T> extends ApiResponse<T[]> { total: number; page: number; pageSize: number; }
```

### API 路由约定
- GET  /api/soap        → query ?userId=&page=&pageSize=，返回 PaginatedResponse<SOAPRecordInfo>
- POST /api/soap        → 入参 SOAPRecordInfo，返回 SOAPRecordInfo
- GET  /api/soap/report → query ?userId=&startDate=&endDate=，返回医生报告 JSON

## 第4步：具体开发任务

### 4.1 SOAP 记录列表 API src/app/api/soap/route.ts

GET 方法：
1. 从 query 获取 userId, page(默认1), pageSize(默认10)
2. 分页查询 SOAPRecord，按 recordedAt 降序
3. symptomTags 字段转为数组（JSON.parse）
4. 返回 PaginatedResponse<SOAPRecordInfo>

POST 方法：
1. 入参 SOAPRecordInfo
2. 从 token 获取 userId
3. symptomTags 数组转为 JSON 字符串
4. 自动计算 adherenceRate（过去30天打卡率）
5. 创建 SOAPRecord
6. 返回 SOAPRecordInfo

### 4.2 依从率计算函数 src/lib/adherence.ts

```typescript
export async function calculateAdherence(userId: string, days: number = 30): Promise<number>
```

逻辑：
1. 查询过去 N 天内所有 CheckIn 记录
2. 统计总数和 missed=true 的数量
3. adherenceRate = (总数 - 漏服数) / 总数 * 100
4. 无记录时返回 100

### 4.3 医生报告生成 API src/app/api/soap/report/route.ts

GET 方法：
1. 从 query 获取 userId, startDate, endDate
2. 查询该时间段的 SOAP 记录
3. 查询该时间段的 CheckIn 记录，计算依从率
4. 组装报告 JSON：

```typescript
{
  patientName: string;
  period: { start: string; end: string };
  adherence: { rate: number; total: number; missed: number };
  symptoms: { date: string; severity: string; tags: string[] }[];
  vitals: {
    bloodPressure: { avg: string; min: string; max: string };
    bloodSugar: { avg: number; min: number; max: number };
    heartRate: { avg: number };
    weight: { latest: number; trend: 'up' | 'down' | 'stable' };
  };
  summary: string; // AI 或模板生成的文字总结
}
```

5. 可以使用模板规则生成 summary（例如：依从率>90%→"依从性良好"，血压持续偏高→"建议关注血压控制"）

### 4.4 SOAP 录入页面 src/app/(patient)/soap/page.tsx

患者端 SOAP 记录录入界面：

**S - 主观症状 (Subjective)：**
- EmotionPicker 表情选择器（来自 Task-03）
- SeverityBadge 严重程度（轻/中/重）
- 文字描述输入框（BigInput，可选）

**O - 客观体征 (Objective)：**
- 血压输入："120/80"（收缩压/舒张压）
- 血糖输入：数字（mmol/L）
- 心率输入：数字（次/分）
- 体重输入：数字（kg）
- 体温输入：数字（℃）

**A/P - 评估与计划：**
- 依从率自动计算展示（百分比+进度条）
- 评估备注文字框（可选）

**操作：**
- "保存记录" 大按钮 → POST /api/soap
- 保存成功提示

### 4.5 SOAP 记录列表页 src/app/(patient)/soap/history/page.tsx

- 按日期分组的记录列表
- 每项显示：日期、症状表情、严重程度标签、依从率
- 点击展开详情（完整 SOAP 四部分信息）
- 顶部"导出报告"按钮 → 调用 GET /api/soap/report 生成报告

### 4.6 SOAP 报告查看页 src/app/(patient)/soap/report/page.tsx

- 日期范围选择器（近7天/30天/自定义）
- 依从率大号显示（环形进度图或大号百分比）
- 症状趋势列表
- 体征指标折线图（血压、血糖）
  - 可以使用简易 CSS 柱状图代替复杂图表库
- 文字总结

## 第5步：NVBar 导航集成

在 src/app/(patient)/layout.tsx 中（如果 Task-04 尚未创建，你需要创建患者端 layout）：
- 底部 NavBar，SOAP tab 高亮
- 路由 /patient/soap

## 第6步：测试要求
- 测试完整 SOAP 录入流程
- 测试依从率计算准确性
- 测试报告生成
- 测试症状表情选择器交互
- npm run build 无报错

## 第7步：提交代码
git add .
git commit -m "feat: SOAP临床档案 - 症状录入/体征记录/依从率计算/医生报告生成"
git push origin feature/soap-records
```

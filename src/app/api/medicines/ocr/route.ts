import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

function getUserId(req: NextRequest): string | null {
  const token =
    req.cookies.get('token')?.value ||
    req.headers.get('Authorization')?.replace('Bearer ', '')
  if (!token) return null
  const decoded = verifyToken(token)
  return decoded?.userId ?? null
}

const OCR_PROMPT = `你是一个专业的处方/药盒识别助手。请分析这张图片，提取药品信息，以 JSON 格式返回：
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
- 只返回 JSON，不要任何其他文字说明`

export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const body = await req.json().catch(() => null)
    if (!body || !body.image) {
      return NextResponse.json(
        { success: false, error: '请上传图片' },
        { status: 400 }
      )
    }

    const dataUrl = body.image as string

    const clientApiUrl = body.apiUrl
    const clientApiKey = body.apiKey
    const clientModel = body.model

    const apiKey = clientApiKey || process.env.VISION_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'OCR 服务未配置' },
        { status: 500 }
      )
    }

    const apiUrl =
      clientApiUrl || process.env.VISION_API_URL || 'https://api.deepseek.com/v1/chat/completions'

    const visionResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: clientModel || 'deepseek-chat',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: OCR_PROMPT },
              { type: 'image_url', image_url: { url: dataUrl } },
            ],
          },
        ],
        max_tokens: 1000,
        temperature: 0.1,
      }),
    })

    if (!visionResponse.ok) {
      const errorText = await visionResponse.text()
      console.error('Vision API 调用失败:', errorText)
      return NextResponse.json(
        { success: false, error: 'AI 识别服务暂时不可用，请稍后重试' },
        { status: 502 }
      )
    }

    const visionData = await visionResponse.json()
    const content = visionData?.choices?.[0]?.message?.content || ''

    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json(
        { success: false, error: '无法识别图片中的药品信息，请确保图片清晰可辨' },
        { status: 422 }
      )
    }

    const result = JSON.parse(jsonMatch[0])

    return NextResponse.json({
      success: true,
      data: {
        name: result.name || '',
        dosage: result.dosage || '',
        frequency: result.frequency || '',
        schedule: result.schedule || [],
        rawText: result.rawText || '',
        confidence: result.confidence || 0,
      },
    })
  } catch (error) {
    console.error('OCR 识别失败:', error)
    return NextResponse.json(
      { success: false, error: 'OCR 识别失败，请稍后重试' },
      { status: 500 }
    )
  }
}

import { prisma } from '@/lib/prisma'

interface AlertCreateData {
  level: 'YELLOW' | 'ORANGE' | 'RED'
  title: string
  message: string
  relatedCheckInId?: string
  relatedMedicineId?: string
}

async function createAlertForAllFamilyMembers(
  patientId: string,
  alertData: AlertCreateData
): Promise<void> {
  const bindings = await prisma.familyBinding.findMany({
    where: { patientId, verified: true },
    select: { familyId: true },
  })

  if (bindings.length === 0) return

  const alerts = bindings.map((b) => ({
    targetUserId: b.familyId,
    sourceUserId: patientId,
    level: alertData.level,
    title: alertData.title,
    message: alertData.message,
    status: 'UNREAD' as const,
    relatedCheckInId: alertData.relatedCheckInId ?? null,
    relatedMedicineId: alertData.relatedMedicineId ?? null,
  }))

  await prisma.alert.createMany({ data: alerts })
}

export async function checkMissedAlert(checkInId: string): Promise<void> {
  const checkIn = await prisma.checkIn.findUnique({
    where: { id: checkInId },
    include: {
      user: { select: { name: true } },
      medicine: { select: { name: true, dosage: true } },
    },
  })

  if (!checkIn || checkIn.missedAlertSent) return

  const subscription = await prisma.alertSubscription.findFirst({
    where: { userId: checkIn.userId },
  })

  if (!subscription?.missAlertEnabled) return

  const thresholdMinutes = subscription.missThresholdMinutes || 60
  const now = new Date()
  const diffMs = now.getTime() - checkIn.scheduledTime.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < thresholdMinutes) return

  const timeStr = `${checkIn.scheduledTime.getHours().toString().padStart(2, '0')}:${checkIn.scheduledTime.getMinutes().toString().padStart(2, '0')}`

  await createAlertForAllFamilyMembers(checkIn.userId, {
    level: 'ORANGE',
    title: '漏服提醒',
    message: `${checkIn.user.name} 在 ${timeStr} 的 ${checkIn.medicine.name} ${checkIn.medicine.dosage} 未按时服用，已超过${diffMinutes}分钟`,
    relatedCheckInId: checkIn.id,
  })

  await prisma.checkIn.update({
    where: { id: checkIn.id },
    data: { missedAlertSent: true },
  })
}

export async function checkInventoryAlert(inventoryId: string): Promise<void> {
  const inventory = await prisma.medicineInventory.findUnique({
    where: { id: inventoryId },
    include: { medicine: { select: { userId: true, name: true } } },
  })

  if (!inventory) return

  if (inventory.remainingCount <= 0) return
  if (inventory.remainingCount > inventory.alertThreshold) return

  await createAlertForAllFamilyMembers(inventory.medicine.userId, {
    level: 'YELLOW',
    title: '库存不足',
    message: `${inventory.medicine.name} 剩余仅 ${inventory.remainingCount} ${inventory.unit}，请及时补充`,
    relatedMedicineId: inventory.medicineId,
  })
}

export async function checkSideEffectAlert(soapRecordId: string): Promise<void> {
  const record = await prisma.sOAPRecord.findUnique({
    where: { id: soapRecordId },
    include: { user: { select: { name: true } } },
  })

  if (!record) return
  if (record.symptomSeverity !== 'SEVERE') return

  const subscription = await prisma.alertSubscription.findFirst({
    where: { userId: record.userId },
  })

  if (!subscription?.sideEffectAlertEnabled) return

  let symptomDesc = '未记录具体症状'
  if (record.symptomTags) {
    try {
      const tags = JSON.parse(record.symptomTags)
      if (Array.isArray(tags) && tags.length > 0) {
        symptomDesc = tags.join('、')
      }
    } catch {
      // ignore parse error
    }
  }

  await createAlertForAllFamilyMembers(record.userId, {
    level: 'RED',
    title: '严重副作用反馈',
    message: `${record.user.name} 反馈严重副作用：${symptomDesc}`,
  })
}

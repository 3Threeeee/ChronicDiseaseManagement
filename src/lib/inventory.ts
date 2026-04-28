import { prisma } from '@/lib/prisma'

export async function deductInventory(medicineId: string): Promise<void> {
  const inventory = await prisma.medicineInventory.findUnique({
    where: { medicineId },
  })
  if (!inventory) return

  const newRemaining = Math.max(0, inventory.remainingCount - 1)
  await prisma.medicineInventory.update({
    where: { medicineId },
    data: { remainingCount: newRemaining },
  })
}

export async function checkLowInventory(medicineId: string): Promise<void> {
  const inventory = await prisma.medicineInventory.findUnique({
    where: { medicineId },
    include: { medicine: true },
  })
  if (!inventory) return

  if (inventory.remainingCount <= 0) return

  if (inventory.remainingCount <= inventory.alertThreshold) {
    await prisma.alert.create({
      data: {
        targetUserId: inventory.medicine.userId,
        sourceUserId: inventory.medicine.userId,
        level: 'YELLOW',
        title: '库存不足',
        message: `${inventory.medicine.name} 剩余 ${inventory.remainingCount} ${inventory.unit}，请及时补充`,
        status: 'UNREAD',
        relatedMedicineId: medicineId,
      },
    })
  }
}

export async function detectMedicineConflict(
  userId: string,
  name: string
): Promise<{ id: string; name: string } | null> {
  const existing = await prisma.medicine.findFirst({
    where: { userId, name },
    select: { id: true, name: true },
  })
  return existing
}

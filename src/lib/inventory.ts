import { prisma } from '@/lib/prisma'
import { checkInventoryAlert } from '@/lib/alertEngine'

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
  })
  if (!inventory) return

  await checkInventoryAlert(inventory.id)
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

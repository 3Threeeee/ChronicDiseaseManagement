import { prisma } from '@/lib/prisma'

export async function calculateAdherence(userId: string, days: number = 30): Promise<number> {
  const since = new Date()
  since.setDate(since.getDate() - days)

  const records = await prisma.checkIn.findMany({
    where: {
      userId,
      scheduledTime: { gte: since },
    },
    select: { missed: true },
  })

  if (records.length === 0) return 100

  const missedCount = records.filter((r) => r.missed).length
  return Math.round(((records.length - missedCount) / records.length) * 100)
}

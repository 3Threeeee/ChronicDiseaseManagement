import { prisma } from '@/lib/prisma'

export async function checkMissedCheckins(): Promise<number> {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)

  const missedCheckIns = await prisma.checkIn.findMany({
    where: {
      missed: false,
      actualTime: null,
      scheduledTime: { lt: oneHourAgo },
    },
  })

  let count = 0
  for (const checkIn of missedCheckIns) {
    await prisma.checkIn.update({
      where: { id: checkIn.id },
      data: { missed: true },
    })
    count++
  }

  return count
}

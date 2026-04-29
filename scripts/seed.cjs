require("dotenv").config({ path: __dirname + "/../.env" });
const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("123456", 10);

  // ========== 1. 创建/更新用户 ==========
  const patient = await prisma.user.upsert({
    where: { phone: "13800000001" },
    update: {
      name: "老王",
      gender: "MALE",
      birthDate: new Date("1958-03-15"),
    },
    create: {
      phone: "13800000001",
      passwordHash,
      name: "老王",
      role: "PATIENT",
      gender: "MALE",
      birthDate: new Date("1958-03-15"),
      alertSubscriptions: {
        create: {
          missAlertEnabled: true,
          inventoryAlertEnabled: true,
          sideEffectAlertEnabled: true,
          missThresholdMinutes: 30,
        },
      },
    },
  });
  console.log(`患者: ${patient.name} (${patient.phone}) / 密码: 123456`);

  const family = await prisma.user.upsert({
    where: { phone: "13800000002" },
    update: {
      name: "王小明",
      gender: "MALE",
      birthDate: new Date("1986-07-22"),
    },
    create: {
      phone: "13800000002",
      passwordHash,
      name: "王小明",
      role: "FAMILY",
      gender: "MALE",
      birthDate: new Date("1986-07-22"),
      alertSubscriptions: {
        create: {
          missAlertEnabled: true,
          inventoryAlertEnabled: true,
          sideEffectAlertEnabled: true,
          missThresholdMinutes: 30,
        },
      },
    },
  });
  console.log(`家属: ${family.name} (${family.phone}) / 密码: 123456`);

  // ========== 2. 绑定家属关系 ==========
  await prisma.familyBinding.upsert({
    where: { patientId_familyId: { patientId: patient.id, familyId: family.id } },
    update: { verified: true },
    create: {
      patientId: patient.id,
      familyId: family.id,
      verified: true,
    },
  });
  console.log("家属绑定完成: 王小明 → 老王");

  // ========== 3. 创建药品 ==========
  const medicineData = [
    {
      name: "盐酸二甲双胍片",
      dosage: "0.5g",
      frequency: "每日3次",
      scheduleJson: JSON.stringify(["08:00", "12:30", "18:30"]),
      note: "餐后服用，注意胃肠道反应",
      totalCount: 60,
      remainingCount: 42,
      unit: "片",
      alertThreshold: 10,
    },
    {
      name: "格列美脲片",
      dosage: "2mg",
      frequency: "每日1次",
      scheduleJson: JSON.stringify(["07:30"]),
      note: "早餐前30分钟服用，注意低血糖反应",
      totalCount: 30,
      remainingCount: 18,
      unit: "片",
      alertThreshold: 5,
    },
    {
      name: "硝苯地平控释片",
      dosage: "30mg",
      frequency: "每日1次",
      scheduleJson: JSON.stringify(["07:00"]),
      note: "早晨整片吞服，不可掰开，监测血压",
      totalCount: 28,
      remainingCount: 8,
      unit: "片",
      alertThreshold: 7,
    },
    {
      name: "厄贝沙坦片",
      dosage: "150mg",
      frequency: "每日1次",
      scheduleJson: JSON.stringify(["07:00"]),
      note: "早晨服用，定期检查肾功能",
      totalCount: 28,
      remainingCount: 20,
      unit: "片",
      alertThreshold: 5,
    },
  ];

  // 先清理旧药品，避免重复
  await prisma.medicineInventory.deleteMany({ where: { medicine: { userId: patient.id } } });
  await prisma.medicinePrescription.deleteMany({ where: { medicine: { userId: patient.id } } });
  await prisma.checkIn.deleteMany({ where: { userId: patient.id } });
  await prisma.sOAPRecord.deleteMany({ where: { userId: patient.id } });
  await prisma.alert.deleteMany({ where: { targetUserId: family.id } });
  await prisma.medicine.deleteMany({ where: { userId: patient.id } });

  const medicines = [];
  for (const med of medicineData) {
    const { totalCount, remainingCount, unit, alertThreshold, ...medFields } = med;
    const medicine = await prisma.medicine.create({
      data: {
        ...medFields,
        userId: patient.id,
        inventory: {
          create: {
            totalCount,
            remainingCount,
            unit,
            alertThreshold,
          },
        },
      },
    });
    medicines.push(medicine);
    console.log(`药品创建: ${medicine.name} (库存${remainingCount}/${totalCount}${unit})`);
  }

  // ========== 4. 创建服药打卡记录（最近7天） ==========
  const now = new Date();
  for (let dayOffset = 6; dayOffset >= 0; dayOffset--) {
    const date = new Date(now);
    date.setDate(date.getDate() - dayOffset);

    for (const med of medicines) {
      const schedule = JSON.parse(med.scheduleJson);
      for (const timeStr of schedule) {
        const [h, m] = timeStr.split(":").map(Number);
        const scheduledTime = new Date(date);
        scheduledTime.setHours(h, m, 0, 0);

        // 生成打卡状态：70%概率已打卡，15%漏服，15%未打卡（仅当天）
        const rand = Math.random();
        let actualTime = null;
        let missed = false;

        if (dayOffset === 0 && scheduledTime > now) {
          // 今天未来的时间，还未到
          missed = false;
          actualTime = null;
        } else if (rand < 0.70) {
          // 已打卡 — 在预定时间±15分钟内
          const offsetMin = Math.floor(Math.random() * 30) - 15;
          actualTime = new Date(scheduledTime);
          actualTime.setMinutes(actualTime.getMinutes() + offsetMin);
          missed = false;
        } else if (rand < 0.85) {
          // 漏服
          missed = true;
          actualTime = null;
        } else {
          // 待打卡（仅当天）
          missed = false;
          actualTime = null;
        }

        await prisma.checkIn.create({
          data: {
            userId: patient.id,
            medicineId: med.id,
            scheduledTime,
            actualTime,
            missed,
            missedAlertSent: missed,
            confirmType: actualTime ? (Math.random() > 0.5 ? "swipe" : "manual") : null,
          },
        });
      }
    }
  }
  console.log("打卡记录已生成（最近7天）");

  // ========== 5. 创建SOAP记录 ==========
  const soapRecords = [
    {
      daysAgo: 6,
      symptomTags: JSON.stringify(["头晕", "乏力"]),
      symptomSeverity: "MILD",
      subjectiveNote: "最近感觉有些头晕，可能是血压偏高",
      bloodPressure: "152/88",
      bloodSugar: 7.8,
      heartRate: 78,
      assessmentNote: "血压偏高，需注意按时服用降压药",
    },
    {
      daysAgo: 4,
      symptomTags: JSON.stringify(["恶心", "嗜睡"]),
      symptomSeverity: "MODERATE",
      subjectiveNote: "吃完二甲双胍后有点恶心，下午犯困",
      bloodPressure: "138/82",
      bloodSugar: 9.2,
      heartRate: 82,
      weight: 72.5,
      assessmentNote: "血糖控制不理想，建议控制饮食，减少主食摄入",
    },
    {
      daysAgo: 2,
      symptomTags: JSON.stringify(["感觉良好"]),
      symptomSeverity: "MILD",
      subjectiveNote: "今天感觉不错，按时吃了药",
      bloodPressure: "128/78",
      bloodSugar: 6.5,
      heartRate: 74,
      temperature: 36.3,
      assessmentNote: "血压血糖均有改善，继续保持",
    },
    {
      daysAgo: 0,
      symptomTags: JSON.stringify(["胸闷"]),
      symptomSeverity: "MODERATE",
      subjectiveNote: "早上起来有点胸闷，可能是没休息好",
      bloodPressure: "145/92",
      bloodSugar: 8.4,
      heartRate: 88,
      assessmentNote: "血压再次升高，需关注是否按时服用硝苯地平，建议明天复测",
    },
  ];

  for (const record of soapRecords) {
    const recordedAt = new Date(now);
    recordedAt.setDate(recordedAt.getDate() - record.daysAgo);
    recordedAt.setHours(9 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 60), 0, 0);

    await prisma.sOAPRecord.create({
      data: {
        userId: patient.id,
        symptomTags: record.symptomTags,
        symptomSeverity: record.symptomSeverity,
        subjectiveNote: record.subjectiveNote,
        bloodPressure: record.bloodPressure,
        bloodSugar: record.bloodSugar,
        heartRate: record.heartRate,
        weight: record.weight,
        temperature: record.temperature,
        assessmentNote: record.assessmentNote,
        adherenceRate: 70 + Math.floor(Math.random() * 20),
        recordedAt,
      },
    });
  }
  console.log("SOAP记录已生成（4条）");

  // ========== 6. 创建预警消息 ==========
  const alerts = [
    {
      level: "ORANGE",
      title: "老王漏服药物提醒",
      message: "老王今日早上8:00的盐酸二甲双胍片未按时服用，已超过30分钟",
      daysAgo: 5,
    },
    {
      level: "YELLOW",
      title: "硝苯地平库存不足",
      message: "硝苯地平控释片剩余仅8片（28片/盒），请及时备药",
      daysAgo: 0,
    },
    {
      level: "RED",
      title: "血压异常预警",
      message: "老王今日血压145/92mmHg，超过正常范围，请关注",
      daysAgo: 0,
    },
  ];

  for (const alert of alerts) {
    const createdAt = new Date(now);
    createdAt.setDate(createdAt.getDate() - alert.daysAgo);

    await prisma.alert.create({
      data: {
        targetUserId: family.id,
        sourceUserId: patient.id,
        level: alert.level,
        title: alert.title,
        message: alert.message,
        status: alert.daysAgo > 2 ? "READ" : "UNREAD",
        createdAt,
        readAt: alert.daysAgo > 2 ? createdAt : null,
      },
    });
  }
  console.log("预警消息已生成（3条，2条未读）");

  console.log("\n=== 种子数据注入完成 ===");
  console.log(`患者: ${patient.name} (68岁) - 2型糖尿病+高血压`);
  console.log(`家属: ${family.name} (40岁) - 监护${patient.name}`);
  console.log(`药品: 4种 (降糖+降压)`);
  console.log(`打卡记录: 最近7天`);
  console.log(`SOAP记录: 4条`);
  console.log(`预警: 3条 (2条未读)`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

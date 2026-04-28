export interface UserProfile {
  id: string;
  phone: string;
  name: string;
  role: 'PATIENT' | 'FAMILY';
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  birthDate?: string;
  avatarUrl?: string;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface RegisterRequest {
  phone: string;
  password: string;
  name: string;
  role: 'PATIENT' | 'FAMILY';
}

export interface AuthResponse {
  token: string;
  user: UserProfile;
}

export interface MedicineInfo {
  id: string;
  userId: string;
  name: string;
  dosage: string;
  frequency: string;
  scheduleJson: string;
  note?: string;
}

export interface MedicineCreateInput {
  name: string;
  dosage: string;
  frequency: string;
  schedule: string[];
  note?: string;
}

export interface OcrResult {
  name: string;
  dosage: string;
  frequency: string;
  schedule: string[];
  rawText: string;
  confidence: number;
}

export interface InventoryInfo {
  id: string;
  medicineId: string;
  medicineName: string;
  totalCount: number;
  remainingCount: number;
  unit: string;
  alertThreshold: number;
  isLow: boolean;
}

export interface CheckInInfo {
  id: string;
  userId: string;
  medicineId: string;
  medicineName: string;
  dosage: string;
  scheduledTime: string;
  actualTime?: string;
  missed: boolean;
  confirmType?: 'swipe' | 'manual';
}

export interface TodaySchedule {
  date: string;
  items: CheckInInfo[];
}

export interface SOAPRecordInfo {
  id: string;
  userId: string;
  subjectiveNote?: string;
  symptomSeverity?: 'MILD' | 'MODERATE' | 'SEVERE';
  symptomTags?: string[];
  bloodPressure?: string;
  bloodSugar?: number;
  heartRate?: number;
  weight?: number;
  temperature?: number;
  assessmentNote?: string;
  adherenceRate?: number;
  reportJson?: string;
  recordedAt: string;
}

export interface AlertInfo {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  sourceUserName: string;
  level: 'YELLOW' | 'ORANGE' | 'RED';
  title: string;
  message: string;
  status: 'UNREAD' | 'READ' | 'RESOLVED';
  createdAt: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
}

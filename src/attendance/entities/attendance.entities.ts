export class Attendance {
  id: number;
  userId: number;
  clockInTime: Date;
  latitude?: number;
  longitude?: number;
  ipAddress?: string;
  deviceInfo?: string;
}

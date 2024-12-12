import { Injectable } from '@nestjs/common';
import { ClockInDto } from './dto/clock-in.dto';
import { Attendance } from './entities/attendance.entities';

@Injectable()
export class AttendanceService {
  private attendances: Attendance[] = [];

  clockIn(userId: number, clockInDto: ClockInDto): Attendance {
    const attendance: Attendance = {
      id: this.attendances.length + 1,
      userId,
      clockInTime: new Date(),
      latitude: clockInDto.latitude,
      longitude: clockInDto.longitude,
      ipAddress: clockInDto.ipAddress,
      deviceInfo: clockInDto.deviceInfo,
    };

    this.attendances.push(attendance);
    return attendance;
  }

  getUserAttendances(userId: number): Attendance[] {
    return this.attendances.filter(
      (attendance) => attendance.userId === userId,
    );
  }
}

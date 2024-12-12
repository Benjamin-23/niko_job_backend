import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { ClockInDto } from './dto/clock-in.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @UseGuards(JwtAuthGuard)
  @Post('clock-in')
  async clockIn(@Request() req, @Body() clockInDto: ClockInDto) {
    // Add IP address from request
    clockInDto.ipAddress = req.ip;

    // Add device info
    clockInDto.deviceInfo = req.get('User-Agent');

    return this.attendanceService.clockIn(req.user.id, clockInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-attendances')
  async getMyAttendances(@Request() req) {
    return this.attendanceService.getUserAttendances(req.user.id);
  }
}

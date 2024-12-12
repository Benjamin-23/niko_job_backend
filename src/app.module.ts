import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AttendanceController } from './attendance/attendance.controller';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [AuthModule, UsersModule, AttendanceModule],
  controllers: [AppController, AuthController, AttendanceController],
  providers: [AppService],
})
export class AppModule {}

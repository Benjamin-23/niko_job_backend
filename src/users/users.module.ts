import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // Important: Export the service so it can be used in other modules
})
export class UsersModule {}

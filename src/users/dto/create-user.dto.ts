import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  role: UserRole;
}
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

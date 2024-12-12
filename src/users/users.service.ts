import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = []; // In a real app, this would be a database

  async create(createUserDto: CreateUserDto) {
    const existingUser = this.users.find(
      (user) => user.email === createUserDto.email,
    );
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = {
      ...createUserDto,
      password: hashedPassword,
    };
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async findAll() {
    return this.users;
  }
}

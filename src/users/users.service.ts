
// src/users/users.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { id } });
  }
}

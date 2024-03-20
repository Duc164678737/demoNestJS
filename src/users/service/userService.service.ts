import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: User): Promise<User> {
    console.log(user);

    const newUser = this.userRepository.create(user);
    console.log(newUser);

    return this.userRepository.save(newUser);
  }

  // Partial co the update 1 phan du lieu trong user
  async update(id: string, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}

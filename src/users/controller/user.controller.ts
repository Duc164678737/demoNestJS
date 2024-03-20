import { User } from '../entities/User';
import { UserService } from './../service/userService.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('api/users')
export class UserController {
    
    constructor(private readonly UserService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        try {
            const createUser = await this.UserService.create(user);
            return createUser;
        } catch (error) {
            throw error;
        }
    }

    @Put()
    async update(@Body() user: User): Promise<any> {
        await this.UserService.update(user.id, user);
        return { message: 'User not found' }
    }

    @Delete()
    async delete(@Param() id: string): Promise<any> {
        const user = await this.UserService.findOne(id);

        if(!user) {
            return { message: 'User not found' }
        }

        await this.UserService.delete(id);
        return { message: 'User deleted' }
    }
}
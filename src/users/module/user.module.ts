import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../entities/User';
import { Module } from "@nestjs/common";
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/userService.service';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}
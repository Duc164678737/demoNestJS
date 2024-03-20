import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/module/user.module';
import { User } from './users/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '103.171.91.25',
      port: 5433,
      password: 'Tienanh2709@',
      username: 'postgres',
      database: 'crewDemo',
      synchronize: true,
      logging: true,
    }),
    CatsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

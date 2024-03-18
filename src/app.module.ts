import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
   TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '164678737',
    username: 'postgres',
    entities: [],
    database: 'testDemo',
    synchronize: true,
    logging:  true
   }),   
  CatsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

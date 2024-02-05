import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
// import { UserService } from './user/user.service';
// import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      password: 'password',
      username: 'user',
      entities: [User],
      database: 'user',
      synchronize: false,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}

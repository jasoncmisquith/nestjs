import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  @MessagePattern({ cmd: 'userCreate' })
  createUser(
    @Payload() data: CreateUserDto,
    @Ctx() context: NatsContext,
  ): CreateUserDto {
    console.log(data, context);
    return data;
  }
}

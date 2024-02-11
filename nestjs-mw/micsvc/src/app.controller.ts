import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller()
export class UserController {
  @MessagePattern('userCreate')
  createUser(
    @Payload() data: CreateUserDto,
    @Ctx() context: NatsContext,
  ): CreateUserDto {
    console.log(data, context);
    return data;
  }

}

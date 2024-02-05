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
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}

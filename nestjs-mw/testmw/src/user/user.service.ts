import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../micsvc/src/user/dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) {}

  createUser(createUserPl: CreateUserDto) {
    const response: Observable<CreateUserDto> = this.userClient.send(
      'userCreate',
      createUserPl,
    );
    return response;
  }
}

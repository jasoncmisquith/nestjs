import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../micsvc/src/user/dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

@Injectable()
export class UserService {
  counter = 0;
  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) {}

  async createUser(createUserPl: CreateUserDto) {
    const response: Observable<CreateUserDto> = this.userClient.send(
      'userCreate',
      createUserPl,
    );
    console.log(`Request ${this.counter} is being processed`);
    await sleep(5000);
    console.log(`Request ${this.counter} completed processing`);
    this.counter += 1;
    return response;
  }
}

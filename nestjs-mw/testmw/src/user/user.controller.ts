import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../../micsvc/src/user/dto/create-user.dto';
import { CoreInterceptor } from 'src/core/core.interceptor';

// @UseInterceptors(CoreInterceptor)
/**
 * whatever the string pass in controller decorator it will be appended to
 * API URL. to call any API from this controller you need to add prefix which is
 * passed in controller decorator.
 * in our case our base URL is http://localhost:3000/user
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Post decorator represents method of request as we have used post decorator the method
   * of this API will be post.
   * so the API URL to create User will be
   * POST http://localhost:3000/user
   */
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}

import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { SigninDto } from './dto/create.signin.dto';

@Controller('user')
export class UserController {
  constructor (private userService: UserService){}

  @Get('/:id')
  getUser(@Param('id') id: string){
    return this.userService.getUser(id)
  }
  
  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto){
    return this.userService.signUp(createUserDto)
  }

  @Post('/signin')
  signIn(@Body() signInDto: SigninDto){
    return this.userService.signIn(signInDto)
  }
}

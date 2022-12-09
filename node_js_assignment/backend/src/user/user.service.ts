import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create.user.dto'; 
import * as uuid from 'uuid';
import * as crypto from 'crypto-js';
import { SigninDto } from './dto/create.signin.dto';

@Injectable()
export class UserService {
  constructor (@InjectRepository (UserEntity) private userRepository: Repository<UserEntity>){}

  async getUser(id: string){
    const user = await this.userRepository.findOneBy({id});
    console.log
    return user;
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = this.userRepository.create();
    user.id = String(uuid.v1());
    user.fName = createUserDto.fName;
    user.lName = createUserDto.lName;
    user.address = createUserDto.address;
    user.zip = createUserDto.zip;
    user.gender = createUserDto.gender;
    user.mobNo = createUserDto.mobNo;
    user.eMail = createUserDto.eMail;
    user.password = String(crypto.SHA256(createUserDto.password));

    await user.save();
    return user;
  }

  async signIn(signInDto: SigninDto){
    const condition = {
      eMail: signInDto.eMail,
      password: String(crypto.SHA256(signInDto.password)),       
    }

    const user = await this.userRepository
    .createQueryBuilder('Users')
    .where('Users.eMail = :eMail and Users.password = :password', condition,)
    .getOne();

    if(!user){
      return false
    }
    delete user.password
    return user
  }
}

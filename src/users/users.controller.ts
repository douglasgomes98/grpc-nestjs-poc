import { Controller, Get, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Get()
  async listUsers() {
    return this.usersService.listUsers();
  }

  @GrpcMethod('UsersService', 'ListUsers')
  async rpcListUsers() {
    return this.usersService.listUsers();
  }
}

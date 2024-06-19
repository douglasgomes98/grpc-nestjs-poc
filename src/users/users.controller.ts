import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @Get()
  async listUsers() {
    return {
      users: [
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
        },
      ],
    };
  }

  @GrpcMethod('UsersService', 'ListUsers')
  async rpcListUsers() {
    return {
      users: [
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
        },
      ],
    };
  }
}

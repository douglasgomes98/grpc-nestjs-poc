import { Injectable } from '@nestjs/common';
import { ListUsersResponse, UsersService } from './users.interface';

@Injectable()
export class UserServiceInMemory implements UsersService {
  listUsers(): ListUsersResponse {
    return {
      users: [
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
        },
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
        },
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
        },
      ],
    };
  }
}

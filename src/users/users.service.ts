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
          role: 'ROLE_TYPE_AGENT',
        },
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          role: 'ROLE_TYPE_AGENCY_ADMIN',
        },
        {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          role: 'ROLE_TYPE_ADMIN',
        },
      ],
    };
  }
}

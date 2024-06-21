import { Injectable } from '@nestjs/common';
import {
  GetUserRequest,
  GetUserResponse,
  ListUsersResponse,
  User,
  UsersService,
} from './users.interface';

@Injectable()
export class UserServiceInMemory implements UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Douglas',
      email: 'douglas@gmail.com',
      role: 'ROLE_TYPE_AGENT',
      agency_id: '1',
    },
    {
      id: '2',
      name: 'Enrique',
      email: 'enrique@gmail.com',
      role: 'ROLE_TYPE_AGENCY_ADMIN',
      agency_id: '2',
    },
    {
      id: '3',
      name: 'Pedro',
      email: 'pedro@gmail.com',
      role: 'ROLE_TYPE_ADMIN',
      agency_id: '1',
    },
  ];

  listUsers(): ListUsersResponse {
    return {
      users: this.users,
    };
  }

  getUserById({ id }: GetUserRequest): GetUserResponse {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return {
      user,
    };
  }
}

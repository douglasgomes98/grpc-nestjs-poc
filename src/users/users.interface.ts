export interface UsersService {
  listUsers(): ListUsersResponse;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ListUsersResponse {
  users: User[];
}

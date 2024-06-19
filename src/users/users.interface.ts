export interface UsersService {
  // GetUser(request: GetUserRequest): GetUserResponse;
  // CreateUser(request: CreateUserRequest): CreateUserResponse;
  // UpdateUser(request: UpdateUserRequest): UpdateUserResponse;
  // DeleteUser(request: DeleteUserRequest): DeleteUserResponse;
  ListUsers(request: ListUsersRequest): ListUsersResponse;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface GetUserRequest {
  id: string;
}
export interface GetUserResponse {
  user: User;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface CreateUserResponse {
  user: User;
}

export interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserResponse {
  user: User;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  success: boolean;
}

export interface ListUsersRequest {}

export interface ListUsersResponse {
  users: User[];
}

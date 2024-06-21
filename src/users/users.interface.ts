export interface UsersService {
  listUsers(): ListUsersResponse;
  getUserById(request: GetUserRequest): GetUserResponse;
}

export type RoleType =
  | 'ROLE_TYPE_UNSPECIFIED'
  | 'ROLE_TYPE_AGENT'
  | 'ROLE_TYPE_AGENCY_ADMIN'
  | 'ROLE_TYPE_ADMIN'
  | 'ROLE_TYPE_CONSOLIDATOR_USER';

export interface User {
  id: string;
  name: string;
  email: string;
  agency_id: string;
  role: RoleType;
}

export interface ListUsersResponse {
  users: User[];
}

export interface GetUserRequest {
  id: string;
}

export interface GetUserResponse {
  user: User;
}

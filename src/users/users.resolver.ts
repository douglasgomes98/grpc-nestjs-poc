import { Query, Resolver } from '@nestjs/graphql';
import { UserType } from './users.types';

@Resolver(() => UserType)
export class UsersResolver {
  @Query(() => [UserType])
  async listUsers() {
    return [
      {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      },
    ];
  }
}

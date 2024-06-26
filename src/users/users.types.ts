import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './users.interface';

@ObjectType()
export class UserType implements Partial<User> {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  agency_id: string;
}

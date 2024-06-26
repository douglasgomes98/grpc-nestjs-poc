import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { userGrpcClientOptions } from './user.grpc-client.options';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { UserServiceInMemory } from './users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        ...userGrpcClientOptions,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersResolver,
    {
      provide: 'UsersService',
      useClass: UserServiceInMemory,
    },
  ],
})
export class UsersModule {}

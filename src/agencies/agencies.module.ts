import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AgenciesController } from './agencies.controller';
import { agenciesGrpcClientOptions } from './agencies.grpc-client.options';
import { AgenciesResolver } from './agencies.resolver';
import { AgenciesServiceInMemory } from './agencies.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AGENCIES_PACKAGE',
        ...agenciesGrpcClientOptions,
      },
    ]),
  ],
  controllers: [AgenciesController],
  providers: [
    AgenciesResolver,
    {
      provide: 'AgenciesService',
      useClass: AgenciesServiceInMemory,
    },
  ],
})
export class AgenciesModule {}

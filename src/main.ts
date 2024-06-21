import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { agenciesGrpcClientOptions } from './agencies/agencies.grpc-client.options';
import { AppModule } from './app.module';
import { userGrpcClientOptions } from './users/user.grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(userGrpcClientOptions);
  app.connectMicroservice<MicroserviceOptions>(agenciesGrpcClientOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();

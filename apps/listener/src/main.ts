import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ListenerModule } from './listener.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ListenerModule,
    {
      transport: Transport.REDIS,
    },
  );
  app.listen();
}
bootstrap();

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ListenerController } from './listener.controller';
import { ListenerService } from './listener.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LISTENER',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  controllers: [ListenerController],
  providers: [ListenerService],
})
export class ListenerModule {}

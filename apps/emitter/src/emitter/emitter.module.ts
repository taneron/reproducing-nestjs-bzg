import { Module } from '@nestjs/common';
import { EmitterService } from './emitter.service';
import { EmitterController } from './emitter.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMITTER',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  controllers: [EmitterController],
  providers: [EmitterService],
})
export class EmitterModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmitterModule } from './emitter/emitter.module';

@Module({
  imports: [EmitterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

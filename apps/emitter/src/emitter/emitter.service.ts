import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmitterService {
  constructor(@Inject('EMITTER') private readonly client: ClientProxy) {}

  emit() {
    this.client.emit('X', { data: 'Hello World' });
  }
}

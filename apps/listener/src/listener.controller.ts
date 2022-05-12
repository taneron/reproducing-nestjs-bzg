import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ListenerService } from './listener.service';

@Controller()
export class ListenerController {
  constructor(private readonly listenerService: ListenerService) {}

  @EventPattern('X')
  async onEvent(data: any) {
    console.log('received event: ', data);
  }
}

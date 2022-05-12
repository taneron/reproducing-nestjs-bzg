import { Injectable } from '@nestjs/common';

@Injectable()
export class ListenerService {
  getHello(): string {
    return 'Hello World!';
  }
}

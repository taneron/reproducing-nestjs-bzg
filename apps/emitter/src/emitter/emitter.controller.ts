import { Controller } from '@nestjs/common';
import { EmitterService } from './emitter.service';

@Controller()
export class EmitterController {
  constructor(private readonly emitterService: EmitterService) {
    //  intervall
    setInterval(() => {
      this.emitterService.emit();
    }, 5000);
  }
}

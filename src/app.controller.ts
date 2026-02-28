import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  health() {
    return {
      status: 'up',
      service: 'ddos-testing-api',
      timestamp: new Date().toISOString(),
    };
  }
}

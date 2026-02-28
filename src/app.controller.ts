import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get('')
  health() {
    this.logger.log('Health check requested');

    return {
      status: 'up',
      service: 'ddos-testing-api',
      timestamp: new Date().toISOString(),
    };
  }
}

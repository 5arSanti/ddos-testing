import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  public counter = 0;

  @Get('')
  health() {
    this.counter++;
    this.logger.log(`Health check requested ${this.counter} times`);

    return {
      status: 'up',
      service: 'ddos-testing-api',
      timestamp: new Date().toISOString(),
    };
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get("/hello") // http://localhost:3000/hello?username=yourname
  getUserName(@Query('username') username: string): string {
    return this.appService.getUserName(username);
  }

  @Get("/sum") // http://localhost:3000/sum?num=10
  getSum(@Query('num') num: number): number {
    return this.appService.getSum(num);
  }
}

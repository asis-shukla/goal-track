import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserName(username: string): string {
    return `Hello ${username}`
  }

  getSum(num: number): number {
    const number = Number(num);
    if (isNaN(number) || number < 1) {
      return 0;
    }
    return (number * (number + 1)) / 2;
  }
}

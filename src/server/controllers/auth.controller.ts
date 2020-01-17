import { Controller, Get, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  calculate(@Query('login') login: string, @Query('password') password: string,): number | string {
    if (login && password) {
      return login.length * password.length;
    }

    return 'enter login and password';
  }
}

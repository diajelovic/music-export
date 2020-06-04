import { Controller, Post, Get, Options, Header, Body, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Options()
  @Header('Access-Control-Allow-Origin', 'http://localhost:4545')
  @Header('Access-Control-Allow-Headers', 'Content-Type')
  optionsLogin() {

  }

  @Post()
  @Header('Access-Control-Allow-Origin', 'http://localhost:4545')
  postLogin(@Body('login') login: string, @Body('password') password: string,): number | string {
    return this.login({login, password});
  }

  @Get()
  @Header('Access-Control-Allow-Origin', 'http://localhost:4545')
  getLogin(@Query('login') login: string, @Query('password') password: string,): number | string {
    return this.login({login, password});
  }

  login({login, password}) {
    if (login && password) {
      return login.length * password.length;
    }

    return 'enter login and password';
  }
}

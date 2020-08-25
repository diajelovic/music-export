import { Controller, Get, Header, Query, Req } from '@nestjs/common';
import { URL } from 'url';
import { Request } from 'express';
import * as https from 'https';
import * as ENV from '../env.json';

const DEEZER_API = 'https://api.deezer.com';

@Controller('deezer')
export class DeezerController {
  @Get('*')
  @Header('Access-Control-Allow-Origin', ENV.clientOrigin)
  callApi(@Query('access_token') token: string, @Req() req: Request): Promise<any> {
    const method = req.originalUrl.replace('/deezer', '');

    return new Promise((resolve, reject) => {
      https
        .get(new URL(method, DEEZER_API), {}, res => {
          let rawData = '';
          res.on('data', chunk => {
            rawData += chunk;
          });
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData);
              resolve(parsedData);
            } catch (e) {
              reject(e.message);
            }
          });
        })
        .on('error', e => {
          console.error(`Got error: ${e.message}`);
        });
    });
  }
}

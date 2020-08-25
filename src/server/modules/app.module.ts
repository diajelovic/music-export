import { Module } from '@nestjs/common';
import { DeezerController } from 'controllers/deezer.controller';
import { LoginService } from 'services/login.service';

@Module({
  // imports: [],
  controllers: [DeezerController],
  // providers: [LoginService],
})
export class AppModule {}

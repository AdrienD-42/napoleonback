import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatailleModule } from './bataille/bataille.module';

@Module({
  imports: [BatailleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

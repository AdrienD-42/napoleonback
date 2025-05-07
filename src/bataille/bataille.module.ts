import { Module } from '@nestjs/common';
import { BatailleService } from './bataille.service';
import { BatailleController } from './bataille.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  providers: [BatailleService],
  controllers: [BatailleController],
  imports: [HttpModule]
})
export class BatailleModule {}

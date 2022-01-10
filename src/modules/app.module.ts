import { Module } from '@nestjs/common';
import { RoomsController } from '../controllers/rooms.controller';
import { BattleController } from 'src/controllers/battle.controller';

import { RoomsService } from '../services/rooms.service';
import { BattleService } from 'src/services/battle.service';

@Module({
  imports: [],
  controllers: [
    RoomsController,
    BattleController,
  ],
  providers: [
    RoomsService,
    BattleService,
  ],
})
export class AppModule {}

import { Controller, Get, Post, Param } from '@nestjs/common';
import { BattleService } from 'src/services/battle.service';

@Controller()
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post('/battle/:id/hit/')
  hit(): object {
    return this.battleService.hit();
  }

  @Post('/battle/setShips')
  setShips(): object {
    return this.battleService.setShips();
  }
}

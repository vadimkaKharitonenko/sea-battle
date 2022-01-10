import { Controller, Get, Post, Param } from '@nestjs/common';
import { RoomsService } from '../services/rooms.service';

@Controller()
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('/room/create')
  createRoom(): object {
    return this.roomsService.createRoom();
  }

  @Post('/room/delete/:id')
  deleteRoom(@Param() params): object {
    return this.roomsService.deleteRoom(params?.id);
  }
}

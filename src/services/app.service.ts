import { Injectable } from '@nestjs/common';

import * as fs from 'fs';

import { HOST } from '../config';

@Injectable()
export class AppService {
  getLink(): object {
    const roomID = String((new Date()).getTime() + (Math.random() * 1000)).replace('.', '');

    const rooms = fs.readFileSync('./db/rooms.json', 'utf-8');

    if ( Object.keys(rooms).includes(roomID) ) {
      return {
        status: false,
        message: 'Can\'t create a room...',
      }
    } else {
      const updatedRooms = { ...JSON.parse(rooms), [roomID]: {} };

      fs.writeFile('./db/rooms.json', JSON.stringify(updatedRooms), (err) => {
        if (err) return console.log(err);
      });
    }

    return {
      status: true,
      data: {
        link: `${HOST}/${roomID}`,
      }
    };
  }
}

import { Injectable } from '@nestjs/common';

import * as fs from 'fs';

import { HOST } from '../config';

@Injectable()
export class RoomsService {
  createRoom(): object {
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

  deleteRoom(id: string): object {
    const notFound = {
      status: false,
      message: 'Room not found!',
    };

    if (id) {
      const rooms = JSON.parse(fs.readFileSync('./db/rooms.json', 'utf-8'));
      
      if (rooms.hasOwnProperty(id)) {
        delete rooms[id];

        fs.writeFile('./db/rooms.json', JSON.stringify(rooms), (err) => {
          if (err) return console.log(err);
        });

        return {
          status: true,
        }
      } else {
        return notFound;
      }
    } else {
      return notFound;
    }
  }
}

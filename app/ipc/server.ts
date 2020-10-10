/* eslint-disable no-console */

import { ipcMain } from 'electron';
import { CHANNEL_NAME } from './constants';
import { IpcMessage, PING_MESSAGE } from './types';

ipcMain.on(CHANNEL_NAME, (event, arg: IpcMessage) => {
  switch (arg.type) {
    case PING_MESSAGE:
      console.log(arg.message);
      event.sender.send(CHANNEL_NAME, {
        type: PING_MESSAGE,
        message: 'Hello from server',
      });
      break;
    default:
      console.log('Unknown message');
  }
});

/* eslint-disable no-console,import/prefer-default-export */
// @ts-ignore
import { ipcRenderer } from 'electron';
import { CHANNEL_NAME } from './constants';
import { PING_MESSAGE } from './types';

ipcRenderer.on(CHANNEL_NAME, (_event, arg) => {
  console.log(arg); // prints "Hello World!"
});

export const sendPingMessage = (message: string) => {
  ipcRenderer.send(CHANNEL_NAME, { type: PING_MESSAGE, message });
};

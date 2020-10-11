/* eslint-disable no-console,import/prefer-default-export */
import { ipcRenderer } from 'electron';
import { PING_CHANNEL, GET_ALL_DATA_CHANNEL } from './types';

ipcRenderer.on(PING_CHANNEL, (_event, arg) => {
  console.log(arg); // prints "Hello World!"
});

export const sendPingRequest = (message: string) => {
  ipcRenderer.send(PING_CHANNEL, { message });
};
export const sendGetAllDataRequest = () => {
  ipcRenderer.send(GET_ALL_DATA_CHANNEL, {});
};

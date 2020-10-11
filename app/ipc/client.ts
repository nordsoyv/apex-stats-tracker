/* eslint-disable no-console,import/prefer-default-export */
import { ipcRenderer } from 'electron';
import { PING_CHANNEL, GET_ALL_DATA_CHANNEL, ADD_MATCH_CHANNEL, AddMatchRequest } from './types';

ipcRenderer.on(PING_CHANNEL, (_event, arg) => {
  console.log(arg); // prints "Hello World!"
});

export const sendPingRequest = (message: string) => {
  ipcRenderer.send(PING_CHANNEL, { message });
};
export const sendGetAllDataRequest = () => {
  ipcRenderer.send(GET_ALL_DATA_CHANNEL, {});
};
export const sendAddMatchRequest = (
  location: string,
  legend: string,
  placement: number,
  kills: number,
  tier: string,
  rankingPoints: number
) => {
  const msg: AddMatchRequest = {
    kills,
    tier,
    rankingPoints,
    placement,
    legend,
    location,
  };
  ipcRenderer.send(ADD_MATCH_CHANNEL, msg);
};

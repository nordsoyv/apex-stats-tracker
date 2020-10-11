/* eslint-disable no-console */

import { ipcMain } from 'electron';
import {
  PING_CHANNEL,
  GET_ALL_DATA_CHANNEL,
  PingRequest,
  GetAllDataRequest,
  ADD_MATCH_CHANNEL,
  AddMatchRequest,
} from './types';
import {addMatch, getAllData} from '../db';

ipcMain.on(PING_CHANNEL, (event, arg: PingRequest) => {
  console.log(arg.message);
  event.sender.send(PING_CHANNEL, {
    message: 'Hello from server',
  });
});

ipcMain.on(GET_ALL_DATA_CHANNEL, (event, _arg: GetAllDataRequest) => {
  const data = getAllData();
  event.sender.send(GET_ALL_DATA_CHANNEL, data);
});

ipcMain.on(ADD_MATCH_CHANNEL, (event, arg: AddMatchRequest) => {
  console.log(arg);
  addMatch(arg);
  const data = getAllData();

  event.sender.send(ADD_MATCH_CHANNEL, data);
});

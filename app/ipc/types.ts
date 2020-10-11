import { MatchRecord } from '../db/types';

// export const CHANNEL_NAME = 'ipc-channel';
export const PING_CHANNEL = 'PING_CHANNEL';
// export const PING_RESPONSE = 'PING_RESPONSE';
export const GET_ALL_DATA_CHANNEL = 'GET_ALL_DATA_CHANNEL';
// export const GET_ALL_DATA_RESPONSE = 'GET_ALL_DATA_RESPONSE';

export type PingRequest = {
  message: string;
};

export type PingResponse = {
  message: string;
};

export type GetAllDataRequest = {
};

export type GetAllDataResponse = {
  data: MatchRecord[];
};


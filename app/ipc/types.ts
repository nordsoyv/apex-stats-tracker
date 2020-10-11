import { MatchRecord } from '../db/types';

export const PING_CHANNEL = 'PING_CHANNEL';
export const GET_ALL_DATA_CHANNEL = 'GET_ALL_DATA_CHANNEL';
export const ADD_MATCH_CHANNEL = 'ADD_MATCH_CHANNEL';

export type PingRequest = {
  message: string;
};

export type PingResponse = {
  message: string;
};

export type GetAllDataRequest = {};

export type GetAllDataResponse = {
  matches: MatchRecord[];
  currentRating: number;
};

export type AddMatchRequest = {
  location: string;
  legend: string;
  placement: number;
  kills: number;
  tier: string;
  rankingPoints: number;
};

export type AddMatchResponse = {
  matches: MatchRecord[];
  currentRating: number;
};

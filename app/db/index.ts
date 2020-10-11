import { MatchRecord } from './types';

// const fs = require('fs');

const dbData = require('./db.json');

let id = 0;

dbData.matches.forEach((match: MatchRecord) => {
  if (match.id > id) {
    id = match.id;
  }
});

export const getAllData = () => {
  return dbData.matches;
};

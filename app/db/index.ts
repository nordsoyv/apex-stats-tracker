/* eslint-disable no-plusplus */
import { AddMatchData, MatchRecord } from './types';

const fs = require('fs');

const dbDataString = fs.readFileSync('./app/db/db.json');
const dbData = JSON.parse(dbDataString);
let id = 0;
let currentRating = 0;

dbData.matches.forEach((match: MatchRecord) => {
  if (match.id > id) {
    id = match.id;
    currentRating = match.rating;
  }
});

export const getAllData = () => {
  return { matches: [...dbData.matches.reverse()], currentRating };
};

export const addMatch = (match: AddMatchData): { matches: MatchRecord[]; currentRating: number } => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
  const matchRecord: MatchRecord = {
    rating: match.rankingPoints + currentRating,
    id: ++id,
    split: 2,
    season: 'Season 6',
    kills: match.kills,
    legend: match.legend,
    location: match.location,
    map: 'Kings Canyon',
    placement: match.placement,
    pointsGained: match.rankingPoints,
    teamSize: 0,
    date,
  };
  dbData.matches.push(matchRecord);
  currentRating += match.rankingPoints;
  fs.writeFile('./app/db/db.json', JSON.stringify(dbData), () => {});

  return getAllData();
};

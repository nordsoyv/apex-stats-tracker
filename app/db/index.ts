import { Legend, Location, MatchRecord, WELocation } from './types';

let id = 0;

const createData = (
  legend: Legend,
  location: Location,
  teamSize: number,
  placement: number,
  kills: number,
  pointsGained: number,
  rating: number
): MatchRecord => {
  return {
    id: id++,
    map: 'Worlds Edge',
    legend,
    location,
    teamSize,
    placement,
    kills,
    pointsGained,
    rating,
  };
};

const data = [
  createData(Legend.Lifeline, WELocation.Geyser, 0, 7, 0, 0, 3078),
  createData(Legend.Lifeline, WELocation.Countdown, 0, 17, 2, -4, 3074),
  createData(Legend.Lifeline, WELocation.LavaFissure, 0, 4, 3, 61, 3135),
];

export const getAllData = () => {
  return data;
};

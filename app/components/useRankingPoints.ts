/* eslint-disable no-param-reassign,default-case */
const getRankinPoints = (tier: string, placement: number, kills: number): number => {
  let entryCost = 0;
  if (tier === 'Silver') {
    entryCost = 12;
  } else if (tier === 'Gold') {
    entryCost = 24;
  }
  if (kills > 5) {
    kills = 5;
  }
  let placementPoints = 0;
  let killPointsModifier = 10;
  switch (placement) {
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
      placementPoints = 0;
      killPointsModifier = 10;
      break;
    case 10:
    case 9:
      placementPoints = 10;
      killPointsModifier = 12;
      break;
    case 8:
    case 7:
      placementPoints = 20;
      killPointsModifier = 12;
      break;
    case 6:
      placementPoints = 30;
      killPointsModifier = 12;
      break;
    case 5:
      placementPoints = 30;
      killPointsModifier = 15;
      break;
    case 4:
      placementPoints = 40;
      killPointsModifier = 15;
      break;
    case 3:
      placementPoints = 40;
      killPointsModifier = 20;
      break;
    case 2:
      placementPoints = 60;
      killPointsModifier = 20;
      break;
    case 1:
      placementPoints = 100;
      killPointsModifier = 25;
      break;
  }

  return kills * killPointsModifier + placementPoints - entryCost;
};

export const useRankingPoint = (tier: string, placement: number, kills: number) => {
  return getRankinPoints(tier, placement, kills);
};

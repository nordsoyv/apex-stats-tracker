import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import { KCLocations, legends, MatchRecord } from '../db/types';
import { ipcRenderer } from 'electron';
import {
  ADD_MATCH_CHANNEL,
  AddMatchRequest,
  AddMatchResponse,
  GET_ALL_DATA_CHANNEL,
  GetAllDataResponse
} from '../ipc/types';
import { sendAddMatchRequest } from '../ipc/client';

// console.log(KCLocations);

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

  const score = kills * killPointsModifier + placementPoints - entryCost;
  return score;
};

const locationMenuItems = [];
for (const loc of KCLocations.keys()) {
  locationMenuItems.push(<MenuItem value={loc}>{loc}</MenuItem>);
}

const legendsMenuItems = [];
for (const loc of legends.keys()) {
  legendsMenuItems.push(<MenuItem value={loc}>{loc}</MenuItem>);
}

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

export const AddMatch = () => {
  const [currentRank, setCurrentRank] = useState<number>(0);
  const [location, setLocation] = useState<string>('Airbase');
  const [legend, setLegend] = useState<string>('Lifeline');
  const [placement, setPlacement] = useState<number>(1);
  const [kills, setKills] = useState<number>(0);
  const [tier, setTier] = useState<string>('Silver');
  const [rankingPoints, setRankinPoints] = useState<number>(0);

  useEffect(() => {
    ipcRenderer.on(GET_ALL_DATA_CHANNEL, (_event, arg: GetAllDataResponse) => {
      setCurrentRank(arg.currentRating);
    });
  }, );
  useEffect(() => {
    ipcRenderer.on(ADD_MATCH_CHANNEL, (_event, arg: AddMatchResponse) => {
      setCurrentRank(arg.currentRating);
    });
  }, );

  useEffect(() => {
    const score = getRankinPoints(tier, placement, kills);
    setRankinPoints(score);
  }, [tier, placement, kills]);

  const handleChangePlacement = (event: React.ChangeEvent<{ value: number }>) => {
    setPlacement(event.target.value);
  };
  const handleChangeKills = (event: React.ChangeEvent<{ value: number }>) => {
    setKills(event.target.value);
  };
  const handleChangeTier = (event: React.ChangeEvent<{ value: string }>) => {
    setTier(event.target.value as string);
  };

  const handleChangeLocation = (event: React.ChangeEvent<{ value: string }>) => {
    setLocation(event.target.value as string);
  };

  const handleChangeLegend = (event: React.ChangeEvent<{ value: string }>) => {
    setLegend(event.target.value as string);
  };

  const handleAddClick = () => {
    sendAddMatchRequest(location, legend, placement, kills, tier, rankingPoints);
  };

  return (
    <>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <FormControl>
              <InputLabel id="tier-label">Tier</InputLabel>
              <Select labelId="tier-label" value={tier} onChange={handleChangeTier}>
                <MenuItem value="Bronze">Bronze</MenuItem>
                <MenuItem value="Silver">Silver</MenuItem>
                <MenuItem value="Gold">Gold</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <FormControl>
              <InputLabel id="location-label">Location</InputLabel>
              <Select labelId="location-label" id="asdf" value={location} onChange={handleChangeLocation}>
                {locationMenuItems}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <FormControl>
              <InputLabel id="legend-label">Location</InputLabel>
              <Select labelId="legend-label" value={legend} onChange={handleChangeLegend}>
                {legendsMenuItems}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <FormControl>
              <InputLabel id="placement-label">Placement</InputLabel>
              <Select labelId="placement-label" id="asdf" value={placement} onChange={handleChangePlacement}>
                {range(1, 21).map((num: number) => {
                  return <MenuItem value={num}>{num}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <FormControl>
              <InputLabel id="kills-label">Kills</InputLabel>
              <Select labelId="kills-label" id="aasdfsdf" value={kills} onChange={handleChangeKills}>
                {range(0, 6).map((num: number) => {
                  return <MenuItem value={num}>{num}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5, height: 50 }}>Rating change: {rankingPoints}</Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5, height: 50 }}>New rating: {currentRank + rankingPoints}</Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Box style={{ paddingTop: 13 }}>
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            ADD
          </Button>
        </Box>
      </Grid>
    </>
  );
};

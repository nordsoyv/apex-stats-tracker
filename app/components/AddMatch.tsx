import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import { KCLocations, legends } from '../db/types';

// console.log(KCLocations);

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

export const AddMatch = () => {
  const [location, setLocation] = useState<string>('');
  const [legend, setLegend] = useState<string>('Lifeline');
  const [placement, setPlacement] = useState<number>(1);
  const [kills, setKills] = useState<number>(0);
  const [tier, setTier] = useState<string>('Silver');

  const handleChangePlacement = (event: React.ChangeEvent<{ value: number }>) => {
    setPlacement(event.target.value as string);
  };
  const handleChangeKills = (event: React.ChangeEvent<{ value: number }>) => {
    setKills(event.target.value as string);
  };
  const handleChangeTier = (event: React.ChangeEvent<{ value: string }>) => {
    setTier(event.target.value as string);
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
            <Autocomplete
              options={[...KCLocations]}
              renderInput={(params) => <TextField {...params} label="Location" />}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Box style={{ padding: 5 }}>
            <Autocomplete options={[...legends]} renderInput={(params) => <TextField {...params} label="Legend" />} />
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
          <Box style={{ padding: 5, height: 50 }}>Rating change: 10</Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5, height: 50 }}>New rating: 2000</Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Box style={{paddingTop:13}}>
        <Button variant="contained" color="primary">
          ADD
        </Button>
        </Box>
      </Grid>
    </>
  );
};

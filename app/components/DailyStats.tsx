import React, { useContext } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { MatchDataContext } from '../containers/MatchDataContext';

const useDailyStats = () => {
  const { matches } = useContext(MatchDataContext);
  const currentDate = new Date();
  const date = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

  const dailyMatches = matches.filter((match) => {
    return match.date === date;
  });
  let total = 0;
  for (const dailyMatch of dailyMatches) {
    total += dailyMatch.pointsGained;
  }
  const average = total / dailyMatches.length;

  return {
    average,
    total,
  };
};

export const DailyStats = () => {
  const { average, total } = useDailyStats();
  return (
    <>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5, height: 50 }}>Daily Points: {total}</Box>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper>
          <Box style={{ padding: 5, height: 50 }}>Average per match: {average.toFixed(1)}</Box>
        </Paper>
      </Grid>
    </>
  );
};

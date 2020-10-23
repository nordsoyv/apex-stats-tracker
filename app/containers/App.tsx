import React from 'react';
import { Grid } from '@material-ui/core';
import { MatchTable } from '../components/MatchTable';
import { AddMatch } from '../components/AddMatch';
import { MatchDataWrapper } from './MatchDataContext';
import { DailyStats } from '../components/DailyStats';

export function App() {
  return (
    <MatchDataWrapper>
      <Grid container spacing={3}>
        <AddMatch />
        <DailyStats />
        <MatchTable />
      </Grid>
    </MatchDataWrapper>
  );
}

/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Grid } from '@material-ui/core';
import { Stats } from '../components/Stats';
import { AddMatch } from '../components/AddMatch';
import { MatchDataWrapper } from './MatchDataContext';

export function App() {
  return (
    <MatchDataWrapper>
      <Grid container spacing={3}>
        <AddMatch />
        <Stats />
      </Grid>
    </MatchDataWrapper>
  );
}

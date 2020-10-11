import React, { useEffect } from 'react';
import { sendGetAllDataRequest } from '../ipc/client';
import { Stats } from '../components/Stats';
import { AddMatch } from '../components/AddMatch';
import {Grid} from "@material-ui/core";

export function App() {
  useEffect(() => {
    sendGetAllDataRequest();
  },[] );
  return (
    <Grid container spacing={3}>
      <AddMatch />
      <Stats />
    </Grid>
  );
}

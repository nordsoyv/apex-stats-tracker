import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ipcRenderer } from 'electron';
import { GET_ALL_DATA_CHANNEL, GetAllDataResponse } from '../ipc/types';
import { MatchRecord } from '../db/types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Stats = () => {
  const [data, setData] = useState<MatchRecord[]>([]);
  useEffect(() => {
    ipcRenderer.on(GET_ALL_DATA_CHANNEL, (_event, arg: GetAllDataResponse) => {
      setData(arg.data);
    });
  }, [setData]);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Map</TableCell>
            <TableCell>Legend</TableCell>
            <TableCell>Drop location</TableCell>
            <TableCell>Team size</TableCell>
            <TableCell>Placement</TableCell>
            <TableCell>Kills/Assists</TableCell>
            <TableCell>Points gained</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{d.map}</TableCell>
                <TableCell>{d.legend}</TableCell>
                <TableCell>{d.location}</TableCell>
                <TableCell>{d.teamSize}</TableCell>
                <TableCell>{d.placement}</TableCell>
                <TableCell>{d.kills}</TableCell>
                <TableCell>{d.pointsGained}</TableCell>
                <TableCell>{d.rating}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

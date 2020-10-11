import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ipcRenderer } from 'electron';
import { ADD_MATCH_CHANNEL, AddMatchResponse, GET_ALL_DATA_CHANNEL, GetAllDataResponse } from '../ipc/types';
import { MatchRecord } from '../db/types';
import { TablePaginationActions } from './TablePaginationActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 600,
    backgroundColor: '#a9d3e7',
  },
});

export const Stats = () => {
  const [data, setData] = useState<MatchRecord[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();
  useEffect(() => {
    ipcRenderer.on(GET_ALL_DATA_CHANNEL, (_event, arg: GetAllDataResponse) => {
      console.log(arg);
      setData(arg.matches.reverse());
    });
  }, [setData]);

  useEffect(() => {
    ipcRenderer.on(ADD_MATCH_CHANNEL, (_event, arg: AddMatchResponse) => {
      setData(arg.matches.reverse());
    });
  });
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: unknown) => {
    // @ts-ignore
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
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
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((d) => {
              return (
                <TableRow key={d.id}>
                  <TableCell>{d.date}</TableCell>
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
};

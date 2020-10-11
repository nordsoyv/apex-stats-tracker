import React from 'react';
import { Button } from '@material-ui/core';
import { sendGetAllDataRequest } from '../ipc/client';
import { Stats } from '../components/Stats';

export function App() {
  const sendMessage = () => {
    sendGetAllDataRequest();
  };
  return (
    <div>
      <Stats />
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Hello World
      </Button>
    </div>
  );
}

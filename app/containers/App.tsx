import React from 'react';
import { Button } from '@material-ui/core';
import {sendGetAllDataRequest, sendPingRequest} from '../ipc/client';
import { Stats } from '../components/Stats';

export function App() {
  const sendMessage = () => {
    sendGetAllDataRequest();
  };
  return (
    <div>
      <Stats></Stats>
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Hello World
      </Button>
    </div>
  );
}

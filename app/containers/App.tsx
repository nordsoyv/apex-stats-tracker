import React from 'react';
import { sendPingMessage } from '../ipc/client';

export function App() {
  const sendMessage = () => {
    sendPingMessage('Hello from client');
  };
  return (
    <div>
      <button onClick={sendMessage}>CLICK</button>
    </div>
  );
}

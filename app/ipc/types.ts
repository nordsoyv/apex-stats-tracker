export const PING_MESSAGE = 'PING_MESSAGE';

type PingMessage = {
  type: typeof PING_MESSAGE;
  message: string;
};

export type IpcMessage = PingMessage;

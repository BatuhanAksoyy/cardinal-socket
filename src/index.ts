import log4js from 'log4js';
import { Server } from 'socket.io';
import { info, initalizeCLI, rl } from './cli';

initalizeCLI();

const io = new Server(3000, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  info(`New connection from ${socket.client.conn.remoteAddress}`);
});

import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// eslint-disable-next-line
import { Server } from "socket.io";
import { createServer } from 'http';
import path from 'path';
import router from './routes/index';
import type { ServerToClientEvents, ClientToServerEvents } from './SocketTypes';

const PORT = process.env.PORT || 4000;

const corsConfig = {
  origin: process.env.SERVER_URL,
  credentials: true,
};

const app = express();
// app.use(cors(corsConfig));
app.use(cors(corsConfig));
app.use(morgan('short'));
app.use(express.json());
const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: process.env.SERVER_URL,
    // origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('joinRoom', (userId, eventId) => {
    socket.join(String(eventId));
  });
  socket.on('emitMsgFromClient', (userId, eventId, msg) => {
    io.in(String(eventId)).emit('basicEmit', userId, eventId, msg);
  });

  socket.on('leaveRoom', (userId, eventId) => {
    socket.leave(String(eventId));
  });
});

app.use('/api', router);
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

httpServer.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on port ${PORT} ! 🚀🚀🚀`); // eslint-disable-line
});

export default io;

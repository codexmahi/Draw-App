import { WebSocketServer } from "ws";

const WebSocket = require('ws');

const wss = new WebSocketServer({ port: 8888 });

wss.on('connection', function connection(ws){
 
    wss.on('message', function incoming(data) {
         ws.send('pong');
  });


});
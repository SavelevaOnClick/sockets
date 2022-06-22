const express = require('express');
const app = express();

const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

app.ws('/', (ws, request) => {console.log('подключено');
  ws.on('message', (message) => {
    message = JSON.parse(message);
        broadCastMessage(ws, message);
    })
  })
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log('connect on port 8000')});

// const connectionHandler = (ws, message) => {
//     ws.id = message.id;
//     broadCastConnection(ws, message)
// }

// const broadCastConnection = (ws, message) => {
//   aWss.clients.forEach((client) => {
//     if(client.id === message.id) {
//       client.send(`Клиент ${message.name} подключился`)
//     }
//   })
// }

const broadCastMessage = (ws, message) => {
  aWss.clients.forEach((client) => {
      client.send(JSON.stringify(message))
  })
}



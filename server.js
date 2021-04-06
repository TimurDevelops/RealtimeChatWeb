const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketio(server);
const PORT = 3000 || process.env.PORT;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', socket => {
  console.log('connetcted')
  socket.emit('message', 'Welcome to chat')
})

server.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});

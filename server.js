const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');

io.on('connection', socket => {
    io.sockets.emit('broadcast', {
        description: 'setting up boi'
    });
});

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/players', (req, res) => {
    res.sendFile(path.join(__dirname, 'players.json'));
});

server.listen(3000, () => {
    console.log('server running...');
});
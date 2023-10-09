const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3001 });

server.on('connection', (socket) => {
    console.log('Connection established');

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    socket.on('close', () => {
        console.log('Connection closed');
    });
});

console.log('WebSocket server running on port 3001');

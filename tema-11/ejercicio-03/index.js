
url = "wss://socketsbay.com/wss/v2/2/demo/"

const socket = new WebSocket(url);

function sendMessage(message) {
    console.log('Sending:', message);
    socket.send(JSON.stringify({ message }));
}

socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened.');
    sendMessage('Hello!');
});

socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed.');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket Error:', error);
});

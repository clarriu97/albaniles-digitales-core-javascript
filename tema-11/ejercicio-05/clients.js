
function sendHttpRequest() {
    fetch('http://localhost:3000')
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            return response.text();
        })
        .then(data => {
            console.log('Response data:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function sendWSRequest() {
    const socket = new WebSocket('ws://localhost:3001');

    socket.addEventListener('open', (event) => {
        console.log('WebSocket connection opened.');
        socket.send('Hello!');
    });

    socket.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
    });

    socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed.');
    });

    socket.addEventListener('error', (error) => {
        console.error('WebSocket Error:', error);
    });
}

const httpButton = document.getElementById('http_button');
const wsButton = document.getElementById('ws_button');

httpButton.addEventListener('click', sendHttpRequest);
wsButton.addEventListener('click', sendWSRequest);

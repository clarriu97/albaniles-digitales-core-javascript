const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'hello world' }));
});

server.on('request', (req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

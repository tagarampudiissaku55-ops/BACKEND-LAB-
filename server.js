
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Node.js HTTP server running at http://localhost:${PORT}`);
});

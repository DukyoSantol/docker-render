
const http = require('http');

const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head><title>My Docker App</title></head>
      <body style="font-family:Arial;text-align:center;margin-top:100px">
        <h1>Docker is running online!</h1>
        <p>Successfully deployed with GitHub and Render.</p>
      </body>
    </html>
  `);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

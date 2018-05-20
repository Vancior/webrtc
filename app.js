const http = require('http'), fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./test_cam.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});

fs.watchFile('./test_cam.html', function (curr, prev) {
});

const fs = require('fs');
const http = require('http');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const buildDirectory = path.join(__dirname, '..', 'build');

const mimeTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain'
};

function sendFile(response, filePath) {
  const extension = path.extname(filePath);
  const contentType = mimeTypes[extension] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Arquivo nao encontrado');
      return;
    }

    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const requestPath = request.url.split('?')[0];
  const safePath = path
    .normalize(decodeURIComponent(requestPath))
    .replace(/^(\.\.[/\\])+/, '')
    .replace(/^[/\\]+/, '');
  const relativePath = safePath === '' ? 'index.html' : safePath;
  const filePath = path.join(
    buildDirectory,
    relativePath
  );

  if (filePath.startsWith(buildDirectory) && fs.existsSync(filePath)) {
    sendFile(response, filePath);
    return;
  }

  sendFile(response, path.join(buildDirectory, 'index.html'));
});

server.listen(port, () => {
  console.log(`Preview em http://localhost:${port}`);
});

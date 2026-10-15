const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const safePath = decodeURIComponent((req.url || '/').split('?')[0]);
  const requested = safePath === '/' ? '/index.html' : safePath;
  const candidate = path.normalize(path.join(root, requested));
  const publicCandidate = path.normalize(path.join(root, 'public', requested));
  const filePath = fs.existsSync(candidate) && !fs.statSync(candidate).isDirectory()
    ? candidate
    : publicCandidate;
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, {
    'Content-Type': mime[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' || ext === '.json' ? 'no-cache' : 'public, max-age=86400'
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Lúmia Contos ouvindo em http://0.0.0.0:${port}`);
});

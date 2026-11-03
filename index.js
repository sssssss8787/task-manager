const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const TITLE = 'Task Manager';

const routes = { '/': () => ({ title: TITLE }) };
for (const file of fs.readdirSync(path.join(__dirname, 'routes'))) {
  Object.assign(routes, require(`./routes/${file}`));
}

const server = http.createServer((req, res) => {
  const handler = routes[req.url];
  res.writeHead(handler ? 200 : 404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(handler ? handler() : { error: 'Not found' }));
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}

module.exports = server;

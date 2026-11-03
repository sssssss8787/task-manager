const server = require('../index');

async function get(url) {
  await new Promise((r) => server.listening ? r() : server.listen(0, r));
  const res = await fetch(`http://localhost:${server.address().port}${url}`);
  return { status: res.status, body: await res.json() };
}

module.exports = { get, close: () => server.close() };

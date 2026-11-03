const test = require('node:test');
const assert = require('node:assert');
const { get, close } = require('./helper');

test('GET /login', async () => {
  const { status, body } = await get('/login');
  assert.strictEqual(status, 200);
  assert.ok(body.token);
  close();
});

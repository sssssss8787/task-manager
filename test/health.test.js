const test = require('node:test');
const assert = require('node:assert');
const { get, close } = require('./helper');

test('GET /health', async () => {
  const { status, body } = await get('/health');
  assert.strictEqual(status, 200);
  assert.strictEqual(body.status, 'ok');
  close();
});

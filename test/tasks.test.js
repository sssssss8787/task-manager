const test = require('node:test');
const assert = require('node:assert');
const { get, close } = require('./helper');

test('GET /tasks', async () => {
  const { status, body } = await get('/tasks');
  assert.strictEqual(status, 200);
  assert.ok(Array.isArray(body));
  close();
});

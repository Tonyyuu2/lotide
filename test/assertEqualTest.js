const assert = require('chai').assert;

describe('assertEqual', () => {

  it('returns 1 for 1', () => {
    assert.strictEqual((1), 1)
  });

  it('returns true for true', () => {
    assert.strictEqual((true), true)
  });
});

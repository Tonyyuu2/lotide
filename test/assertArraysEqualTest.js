const assert = require('chai').assert;

describe('assertArraysEqual', () => {

  it('should return [1, 2, 3] for [1, 2, 3]', () => {
    assert(([1, 2, 3]), [1, 2, 3])
  });

  it("should return ['what'] for ['what']", () => {
    assert.deepEqual((['what']), ['what'])
  })
});
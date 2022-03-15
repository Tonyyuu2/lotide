const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {

  it('should return 4 for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])
  });

  it('should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), [])
  });

  it('should return 2 for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
})
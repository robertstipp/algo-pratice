const { maxSubArray } = require('../challenges/maxSubArray');

describe('max subarray', () => {
  it('Function should return correct sum of max contiguous sub array', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('Function should handle input arrays of length = 1', () => {
    const arr = [1];
    expect(maxSubArray(arr)).toStrictEqual(1);
  });
});

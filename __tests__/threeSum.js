const { threeSum } = require('../challenges/threeSum');

// Sort Function
const sortResult = (result) => {
  for (const combination of result) {
    combination.sort((a, b) => a - b);
  }
  return result;
};

describe('three sum', () => {
  it('Function should return empty array if no valid combinations', () => {
    const arr = [0, 1, 1];
    expect(threeSum(arr)).toEqual([]);
  });

  it('Function should return array of valid combinations', () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    expect(sortResult(threeSum(arr))).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it(`Function should handle an all 0's array`, () => {
    const arr = [0, 0, 0];
    expect(threeSum(arr)).toEqual([[0, 0, 0]]);
  });
});

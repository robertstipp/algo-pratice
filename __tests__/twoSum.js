const { twoSum } = require("../challenges/twoSum.js");

describe("two sum", () => {
  it("Function should return two values that sum up to intended target", () => {
    const arr = [2, 7, 9, 15];
    const resultFor01 = twoSum(arr, 9);
    expect(resultFor01.sort((a, b) => a - b)).toEqual([0, 1]);
    const resultFor02 = twoSum(arr, 11);
    expect(resultFor02.sort((a, b) => a - b)).toEqual([0, 2]);
    const resultFor12 = twoSum(arr, 16);
    expect(resultFor12.sort((a, b) => a - b)).toEqual([1, 2]);
  });
});

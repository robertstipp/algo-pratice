const {
  longestConsecutive,
} = require("../challenges/longestConsecutiveSequence");

describe("longestConsecutive", () => {
  test("should return 0 for an empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test("should return 1 for an array with one element", () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  test("should return the length of the array for an array with consecutive elements", () => {
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
  });

  test("should return 1 for an array with non-consecutive elements", () => {
    expect(longestConsecutive([1, 3, 5, 7, 9])).toBe(1);
  });

  test("should return the length of the longest consecutive sequence for an array with duplicate elements", () => {
    expect(longestConsecutive([1, 2, 2, 3, 4, 4, 5])).toBe(5);
  });

  test("should handle out of order sequences", () => {
    expect(longestConsecutive([5, 1, 7, 6, 4, 3, 2, 8])).toBe(8);
  })
});

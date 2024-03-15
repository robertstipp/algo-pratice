const { mergeIntervals } = require("../challenges/mergeIntervals.js");

describe("merge intervals", () => {
  it.each([
    {
      intervals: [
        [1, 2],
        [2, 3],
        [1, 5],
      ],
      expected: [[1, 5]],
    },
    {
      intervals: [
        [1, 2],
        [2, 3],
      ],
      expected: [
        [1, 2],
        [2, 3],
      ],
    },
    {
      intervals: [
        [1, 2],
        [1, 2],
        [0, 2],
      ],
      expected: [[0, 2]],
    },
    {
      intervals: [
        [-10000, 10000],
        [1, 2],
        [0, 2],
        [25, 30],
      ],
      expected: [[-10000, 10000]],
    },
  ])(
    "should return array with merged intervals $expected from $intervals",
    ({ intervals, expected }) => {
      const result = mergeIntervals(intervals);

      expect(result).toEqual(expected);
    }
  );
});

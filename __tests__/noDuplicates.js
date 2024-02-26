const { noDuplicates } = require("../challenges/noDuplicates.js");

describe("no duplicates", () => {
  it.each([
    {
      array: [1, 1, 2, 3, 4],
      expected: [1, 2, 3, 4],
    },
    {
      array: [1, 1, 1, 2, 2, 3, 4],
      expected: [1, 2, 3, 4],
    },
    {
      array: ["a", "c", "s", "c"],
      expected: ["a", "c", "s"],
    },
  ])(
    "should return array with duplicates removed $expected from $array",
    ({ array, expected }) => {
      const result = noDuplicates(array);

      expect(result).toEqual(expected);
    }
  );
});

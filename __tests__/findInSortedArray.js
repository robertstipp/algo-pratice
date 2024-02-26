const { findInSortedArray } = require("../challenges/findInSortedArray.js");

const genArray = (size) => Array.from({ length: size }, (_, index) => index);

const benchmarkRunDuration = (fn, ...args) => {
  const start = process.hrtime.bigint();
  fn(...args);
  const end = process.hrtime.bigint();
  return end - start;
};

const mean = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;

const pearsonCorrelation = (xs, ys) => {
  const xMean = mean(xs);
  const yMean = mean(ys);
  const numerator = xs.reduce(
    (sum, x, i) => sum + (x - xMean) * (ys[i] - yMean),
    0
  );
  const denominator = Math.sqrt(
    xs.reduce((sum, x) => sum + (x - xMean) ** 2, 0) *
      ys.reduce((sum, y) => sum + (y - yMean) ** 2, 0)
  );

  return numerator / denominator;
};

const calculateRSquared = (xData, yData) => {
  const r = pearsonCorrelation(xData, yData);
  return r ** 2;
};

describe("find in sorted array", () => {
  const testArray = [1, 2, 3, 4, 5];
  it("should return true if value exists in the array", () => {
    expect(findInSortedArray(testArray, 1)).toEqual(true);
    expect(findInSortedArray(testArray, 3)).toEqual(true);
  });
  it("should return false if value does not exist in the array", () => {
    expect(findInSortedArray(testArray, 0)).toEqual(false);
    expect(findInSortedArray(testArray, 10)).toEqual(false);
  });

  it("should have a R squared below threshold, should be time efficient", () => {
    const testCases = [
      { size: 10 },
      { size: 20 },
      { size: 100 },
      { size: 200 },
      { size: 1000 },
      { size: 2000 },
      { size: 10000 },
      { size: 20000 },
      { size: 100000 },
      { size: 200000 },
      { size: 1000000 },
      { size: 2000000 },
    ];

    const outputTable = testCases.map(({ size }) => {
      const arr = genArray(size);
      const time = benchmarkRunDuration(
        findInSortedArray,
        arr,
        arr[arr.length - 1]
      );
      return { size, time };
    });

    const [xData, yData] = outputTable.reduce(
      (acc, curr) => {
        acc[0].push(Math.log2(curr.size));
        acc[1].push(Number(curr.time));
        return acc;
      },

      [[], []]
    );
    const rSquared = calculateRSquared(xData, yData);
    expect(rSquared).toBeLessThan(0.25);
  });
});

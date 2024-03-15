import { findZero } from "../challenges/findZero";

describe("findZero", () => {
  it("should return false when is not reachable", () => {
    expect(findZero([1, 3, 2, 0, 4, 2, 1], 1)).toBe(false);
  });

  it("should return true when is reachable", () => {
      expect(findZero([1, 3, 2, 0, 4, 2, 1], 3)).toBe(true);
  });

  it("should handle empty arrays", () => {
    expect(findZero([])).toBe(false);
  });

  it("should handle single element arrays", () => {
    expect(findZero([4], 0)).toBe(true);
    expect(findZero([0], 0)).toBe(true);
  });

  it("should handle out-of-bounds moves", () => {
    expect(findZero([1, 3, 2, 0, 4, 2, 1], 2)).toBe(false);
    expect(findZero([1, 3, 2, 0, 4, 2, 1], 3)).toBe(true);
  });
});

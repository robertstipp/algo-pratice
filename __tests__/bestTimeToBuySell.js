const { bestTimeToBuySell } = require('../challenges/bestTimeToBuySell');

describe('bestTimeToBuySell', () => {
  it('should return a number', () => {
    expect(typeof bestTimeToBuySell([7, 1, 5, 3, 6, 4])).toBe('number');
  });

  it('should calculate the best time to maximize profit', () => {
    expect(bestTimeToBuySell([7, 1, 5, 3, 6, 4])).toEqual(5);
  });

  it('should handle empty arrays', () => {
    expect(bestTimeToBuySell([])).toEqual(0);
  });

  it("should handle arrays with only one element", () => {
    expect(bestTimeToBuySell([7])).toEqual(0);
  });

  it("should handle arrays with decreasing prices", () => {
    expect(bestTimeToBuySell([7, 6, 5, 4, 3, 2, 1])).toEqual(0);
  });

  it("should handle arrays with increasing prices", () => {
    expect(bestTimeToBuySell([1, 2, 3, 4, 5, 6, 7])).toEqual(6);
  });

  it("should handle arrays with multiple peaks and valleys", () => {
    expect(bestTimeToBuySell([7, 1, 5, 3, 6, 4, 9, 2])).toEqual(8);
  });

  it("should handle arrays with negative prices", () => {
    expect(bestTimeToBuySell([-1, -2, -3, -4, -5, -6, -7])).toEqual(0);
  });
});
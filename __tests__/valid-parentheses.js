const { validParens } = require('../challenges/valid-parentheses');

describe('valid parentheses', () => {
  it(`Function should return true for correct sequence of one bracket type`, () => {
    expect(validParens('()')).toBe(true);
  });

  it(`Function should handle all three bracket types`, () => {
    expect(validParens('()[]{}')).toBe(true);
  });

  it('Function should return false for mismatching brackets', () => {
    expect(validParens('(]')).toBe(false);
  });

  it(`Function should return false for mismatching of multiple bracket types`, () => {
    expect(validParens('([)]')).toBe(false);
  });

  it(`Function should return true for correct order of different bracket types`, () => {
    expect(validParens('{[]}')).toBe(true);
  });
});

// Example 5:
// Input: "{[]}"
// Output: true

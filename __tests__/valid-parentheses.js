const { validParens } = require('../challenges/valid-parentheses');

describe('valid parentheses', () => {
  it(`Function should return true for '()'`, () => {
    expect(validParens('()')).toBe(true);
  });

  it(`Function should return true for '()[]{}'`, () => {
    expect(validParens('()[]{}')).toBe(true);
  });

  it(`Function should return false for '(]'`, () => {
    expect(validParens('(]')).toBe(false);
  });

  it(`Function should return false for '([)]'`, () => {
    expect(validParens('([)]')).toBe(false);
  });

  it(`Function should return true for '{[]}`, () => {
    expect(validParens('{[]}')).toBe(true);
  });
});

// Example 5:
// Input: "{[]}"
// Output: true

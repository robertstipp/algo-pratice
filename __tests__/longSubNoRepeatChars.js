const { longestSub } = require('../challenges/longSubNoRepeatChars');

describe('longest sub w/o repeating characters', () => {
  it('Function should return correct length of subString', () => {
    expect(longestSub('abcabcbb')).toBe(3);
  });

  it(`Function should correctly handle repetitions of only one character`, () => {
    expect(longestSub('bbbbb')).toBe(1);
  });

  it(`Function should return correct length for subStrings with repeated characters`, () => {
    expect(longestSub('pwwkew')).toBe(3);
  });
});

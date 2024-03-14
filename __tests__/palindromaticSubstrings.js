const {
  palindromicSubstrings,
} = require("../challenges/palindromaticSubstrings");

/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Empty strings return 0

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

describe("palindromaticSubstrings", () => {
  it("should return a number", () => {
    expect(isNaN(palindromicSubstrings("a"))).toBe(false);
  });

  test('Count of palindromic substrings in "level" should be 7', () => {
    expect(palindromicSubstrings("level")).toBe(7);
  });

  test('Count of palindromic substrings in "abca" should be 4', () => {
    expect(palindromicSubstrings("abca")).toBe(4);
  });

  test('Count of palindromic substrings in "aaa" should be 6', () => {
    expect(palindromicSubstrings("aaa")).toBe(6);
  });

  test('Count of palindromic substrings in "aaaaa" should be 15', () => {
    expect(palindromicSubstrings("aaaaa")).toBe(15);
  });

  test('Count of palindromic substrings in "racecar" should be 10', () => {
    expect(palindromicSubstrings("racecar")).toBe(10);
  });

  test('Count of palindromic substrings in "noonneveroddoreven" should be 30', () => {
    expect(palindromicSubstrings("noonneveroddoreven")).toBe(30);
  });

  test('Count of palindromic substrings in "deified" should be 10', () => {
    expect(palindromicSubstrings("deified")).toBe(10);
  });

  test('Count of palindromic substrings in "level" should be 7', () => {
    expect(palindromicSubstrings("level")).toBe(7);
  });

  test('Count of palindromic substrings in "madam" should be 7', () => {
    expect(palindromicSubstrings("madam")).toBe(7);
  });

  test("Count of palindromic substrings in an empty string should be 0", () => {
    expect(palindromicSubstrings("")).toBe(0);
  });

  test("Count of palindromic substrings in a single character string should be 1", () => {
    expect(palindromicSubstrings("a")).toBe(1);
  });
});

const { storeAlphabet } = require("../challenges/storeAlphabet");

describe("storeAlphabet", () => {
  it("should return a string", () => {
    expect(typeof storeAlphabet("aggd", "aggz", "zgac")).toBe("string");
  });

  it("should return the string that logically comes first", () => {
    expect(storeAlphabet("abc", "def", "abcdefghijklmnopqrstuvwxyz")).toBe(
      "abc"
    );
  });

  it("should handle duplicate strings", () => {
    expect(storeAlphabet("ghi", "ghi", "abcdefghijklmnopqrstuvwxyz")).toBe(
      "ghi"
    );
  });

  it("should handle characters not in the provided alphabet", () => {
    expect(storeAlphabet("a#", "ab", "abcdefghijklmnopqrstuvwxyz")).toBe("ab");
  });

  it("should handle strings of different lenghts", () => {
    expect(storeAlphabet("hello", "hi", "abcdefghijklmnopqrstuvwxyz")).toBe('hello');
  })

  it("should handle one string being a prefix of the other", () => {
    expect(storeAlphabet("prefix", "prefixsuffix", "abcdefghijklmnopqrstuvwxyz")).toBe("prefix")
  });
});

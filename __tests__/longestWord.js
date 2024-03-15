const { longestWord } = require("../challenges/longestWord.js");

describe("longest word", () => {
  it("Function should return empty string if lists is empty", () => {
    let words = [];
    expect(longestWord(words)).toEqual("");
  });

  it("Function should return the longest word of words in list", () => {
    let words = ["dog", "cat", "walker", "dogwalker"];
    expect(longestWord(words)).toEqual("dogwalker");
    words = ["bob", "cat", "bobcat", "by", "bobby"];
    expect(longestWord(words)).toEqual("bobcat");
    words = ["chow", "hammer", "dogtown", "tree", "dog"];
    expect(longestWord(words)).toEqual("dogtown");
  });
});

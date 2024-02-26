const { changeWord } = require("../challenges/changeWord.js");

describe("changeWord", () => {
  it.each([
    {
      beginWord: "corn",
      endWord: "torn",
      wordList: ["torn"],
      expected: 1,
    },
    {
      beginWord: "cat",
      endWord: "dot",
      wordList: ["bat", "bot", "dot"],
      expected: 3,
    },
    {
      beginWord: "dog",
      endWord: "lip",
      wordList: ["log", "lag", "lap", "lip"],
      expected: 4,
    },
    {
      beginWord: "dog",
      endWord: "tug",
      wordList: ["log", "lag", "lap", "lip", "lug", "tug"],
      expected: 3,
    },
    {
      beginWord: "dog",
      endWord: "tug",
      wordList: ["log", "lag", "lap", "lip", "tug"],
      expected: -1,
    },
    {
      beginWord: "dog",
      endWord: "pug",
      wordList: ["pug"],
      expected: -1,
    },
  ])(
    "should return number of transformations required to go from $beginWord to $endWord using $wordList",
    ({ beginWord, endWord, wordList, expected }) => {
      const result = changeWord(beginWord, endWord, wordList);
      expect(result).toEqual(expected);
    }
  );
});

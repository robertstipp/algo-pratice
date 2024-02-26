// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

const longestSub = (str) => {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
};

module.exports = { longestSub };

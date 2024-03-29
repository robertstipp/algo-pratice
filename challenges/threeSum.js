/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

*** Example One ***
Input: [-1, 0, 1, 2, -1, -4]
Output:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*** Example Two ***
Input: [0,1,1]
Output: []

*** Example Three ***
Input: [0,0,0]
Output: [[0,0,0]]
*/

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1,
      high = nums.length - 1,
      sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};

module.exports = { threeSum };

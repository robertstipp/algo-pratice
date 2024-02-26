// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let threesum = nums[i] + nums[left] + nums[right];
      if (threesum > 0) {
        right--;
      } else if (threesum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
};

const sortResult = (result) => {
  for (const combination of result) {
    combination.sort((a, b) => a - b);
  }
  return result;
};
//    const arr = [-1, 0, 1, 2, -1, -4];
console.log(sortResult(threeSum([-1, 0, 1, 2, -1, -4])));
module.exports = { threeSum };

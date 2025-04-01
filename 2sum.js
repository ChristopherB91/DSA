const test = {
  nums1: [2, 7, 11, 15],
  target1: 9,
  nums2: [3, 2, 4],
  target2: 6,
  nums3: [3, 3],
  target3: 6,
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(test.nums1, test.target1));
console.log(twoSum(test.nums2, test.target2));
console.log(twoSum(test.nums3, test.target3));

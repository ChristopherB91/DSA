const testCase = {
  test1: { nums: [1, 3, 5, 6], target: 5 },
  test2: { nums: [1, 3, 5, 6], target: 2 },
  test3: { nums: [1, 3, 5, 6], target: 7 },
};

let searchInsert = function (nums, target) {
  let max = nums.length - 1;
  let min = 0;
  let center = Math.floor((max + min) / 2);
  while (min <= max) {
    if (target === nums[center]) {
      return center;
    } else if (target > nums[center]) {
      min = center + 1;
      center = Math.floor((max + min) / 2);
    } else if (target < nums[center]) {
      max = center - 1;
      center = Math.floor((max + min) / 2);
    }
  }
  if (target < nums[center]) {
    return center - 1;
  } else {
    return center + 1;
  }
};

console.log(
  searchInsert(testCase.test1.nums, testCase.test1.target),
  searchInsert(testCase.test2.nums, testCase.test2.target),
  searchInsert(testCase.test3.nums, testCase.test3.target)
);

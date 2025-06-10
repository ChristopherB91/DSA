var singleNumber = function (nums) {
  const ht = {};

  for (const i of nums) {
    ht[i] = ht[i] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) {
      return parseInt(key);
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

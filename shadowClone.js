const shadowClone = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return 2 * shadowClone(n - 1) + 1;
  }
};

console.log(shadowClone(1)); // Should return 1
console.log(shadowClone(2)); // Should return 3
console.log(shadowClone(3)); // Should return 7
console.log(shadowClone(4)); // Should return 15
console.log(shadowClone(5)); // Should return 31

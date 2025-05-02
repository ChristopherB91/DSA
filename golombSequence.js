// In mathematics, the Golomb sequence is a non-decreasing integer sequence where n-th term is equal to number of times n appears in the sequence.

// The first few values are
// 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, ……

// Explanation of few terms:
// Third term is 2, note that three appears 2 times.
// Second term is 2, note that two appears 2 times.
// Fourth term is 3, note that four appears 3 times.

// The Following function uses recursion to calculate the Nth number.
const golomb = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return 1 + golomb(n - golomb(golomb(n - 1)));
  }
};

// console.log(golomb(9)); // Should return 5

// The correct answer is 5 and we will get that answer anyway but this is extremly slow due to the how many times we recursive calls we make.
// The time complexity would be O(2^n)
// This can be solved through dynamic programing with memoization and hash tables

const golomb2 = (
  n,
  memo = {} /*We pass in a memo obj to keep track of values once they are computed and decrease the amount of recursive calls being made*/
) => {
  if (n == 1 /*Our base case again*/) {
    return 1;
  }
  // Check if the result is already memoized; if so, return it immediately
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = 1 + golomb2(n - golomb2(golomb2(n - 1, memo), memo), memo);
  console.log(memo); // This part is unnecessary but I thought it would help see whats going on
  return memo[n];
};

console.log(golomb2(9));

// Cleaner version no comments
const golomb3 = (n, memo = {}) => {
  if (n == 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = 1 + golomb3(n - golomb3(golomb3(n - 1, memo), memo), memo);
  return memo[n];
};

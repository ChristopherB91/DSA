// 1️⃣ Zoro’s Lost Path (One Piece)
// Zoro is trying to reach an enemy stronghold hidden deep in a forest. The stronghold is exactly n units away.
// At each fork in the path, Zoro can choose one of two moves:

// A narrow shortcut, which moves him forward by 1 unit.

// A longer scenic route, which moves him forward by 2 units.

// Because of his terrible direction, Zoro ends up completing every possible sequence of routes.

// How many distinct sequences of moves can Zoro take to reach the stronghold in exactly n units?
// Write a recursive function that returns this number.

const sequences = (n) => {
  if (n == 1) return 1;
  if (n == 2) return 2;

  return sequences(n - 1) + sequences(n - 2);
};

console.log(sequences(5)); // Should return 8

// Next we optimize using memoization

const sequences2 = (n, memo = {}) => {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n in memo) {
    return memo[n];
  }

  memo[n] = sequences2(n - 1) + sequences2(n - 2);
  return memo[n];
};

console.log(sequences2(30));

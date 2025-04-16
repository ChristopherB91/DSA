//                                                                                              PROBLEM
// 🍥 Naruto: Shadow Clone Multiplication
// Prompt:
//  Naruto uses his signature Shadow Clone Jutsu! He creates 2 clones, and each clone creates 2 new clones in the next generation, but only up to a certain depth.
// Generation 1: Naruto

// Generation 2: 2 clones

// Generation 3: Each of those 2 clones makes 2 more (4)

// etc.
// Given a number n, representing the number of clone generations, write a recursive function that calculates the total number of clones (including the original Naruto) created.
// Return the total number of Narutos and clones across all generations.

//                                                                                              SOLUTION

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

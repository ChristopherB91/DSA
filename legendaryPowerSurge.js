// 🟢 Broly: Legendary Power Surge

// Prompt:
// Broly is unleashing his latent power during intense training. He starts with a power level of 1, barely containing his overwhelming potential.
// Each minute, his power grows recursively based on the following rule:
// At minute n, Broly gains power equal to the square of the current minute, plus all power from the previous minutes.
// Write a recursive function to calculate Broly’s power level at minute n.

const power = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return power(n - 1) + n ** 2;
  }
};

console.log(power(1)); // Should return 1
console.log(power(2)); // Should return 5
console.log(power(3)); // Should return 14
console.log(power(4)); // Should return 30
console.log(power(5)); // Should return 55

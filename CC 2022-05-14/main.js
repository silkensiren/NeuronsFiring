// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// PREP
// P: positive and negative integers?
// R: return the string 'odd' or 'even'
// E: Input: [0, 1, 4] Output: "odd"
// E2: Input: [0, -1, -5] Output: "even"
// P: Reduce array into sum and determine if mod2 = 0 for even and 1 for odd

function oddOrEven(arr) {
  return arr.reduce((acc, c) => acc + c, 0) % 2 ? "odd" : "even";
}

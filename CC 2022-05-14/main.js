// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// PREP
// P: positive or negative integers?
// R: return the string 'odd' or 'even'
// E: Input: [0, 1, 4] Output: "odd"
// E2: Input: [0, -1, -5] Output: "even"

function oddOrEven(arr) {
  return arr.reduce((acc, c) => acc + c, 0) % 2 ? "odd" : "even";
}

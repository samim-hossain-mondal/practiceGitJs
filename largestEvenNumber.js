const readline = require("readline-sync");

// User Input
let arrSize = Number(readline.question());
let arr = [];
for (let i = 0; i < arrSize; ++i) {
  arr.push(Number(readline.question()));
}

// Normal Function
function largestEvenNumberN(arr) {
  let result = Number.MIN_SAFE_INTEGER;
  function findLargestEven(item) {
    result = item % 2 == 0 && item > result ? item : result;
  }
  arr.forEach(findLargestEven);
  return (result = result != Number.MIN_SAFE_INTEGER ? result : -1);
}
console.log(largestEvenNumberN(arr));

// Arrow Function
let largestEvenNumberA = (arr) => {
  let result = Number.MIN_SAFE_INTEGER;
  function findLargestEven(item) {
    result = item % 2 == 0 && item > result ? item : result;
  }
  arr.forEach(findLargestEven);
  return (result = result != Number.MIN_SAFE_INTEGER ? result : -1);
};
console.log(largestEvenNumberA(arr));

// Expoting Functions
module.exports = { largestEvenNumberN, largestEvenNumberA };

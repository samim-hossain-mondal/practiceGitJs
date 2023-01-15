const readline = require("readline-sync");

// User Input
let inputString = String(readline.question());

const vowels = ["a", "e", "i", "o", "u"];

// Normal Function
function countVowelN(str) {
  let count = 0;
  str = str.toLowerCase();
  function isVowel(item) {
    count += vowels.includes(item) ? 1 : 0;
  }
  str.split("").forEach(isVowel);
  return count;
}
console.log(countVowelN(inputString));

// Arrow Function
let countVowelA = (str) => {
  let count = 0;
  str = str.toLowerCase();
  function isVowel(item) {
    count += vowels.includes(item) ? 1 : 0;
  }
  str.split("").forEach(isVowel);
  return count;
};
console.log(countVowelA(inputString));

// Exporting Functions
module.exports = { countVowelN, countVowelA };

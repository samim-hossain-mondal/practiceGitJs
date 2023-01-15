const readline = require("readline-sync");
let inputString = String(readline.question());

const vowels = ["a", "e", "i", "o", "u"];
function countVowelN(str) {
  let count = 0;
  str = str.toLowerCase();
  function isVowel(item) {
    count += vowels.includes(item) ? 1 : 0;
  }
  str.split("").forEach(isVowel);
  return count;
}

let countVowelA = (str) => {
  let count = 0;
  str = str.toLowerCase();
  function isVowel(item) {
    count += vowels.includes(item) ? 1 : 0;
  }
  str.split("").forEach(isVowel);
  return count;
};

console.log(countVowelN(inputString));
console.log(countVowelA(inputString));

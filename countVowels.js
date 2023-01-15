const readline = require("readline-sync");
let inputString = String(readline.question());

const vowels = ["a", "e", "i", "o", "u"];
function countVowel(str) {
  let count = 0;
  str = str.toLowerCase();
  function isVowel(item) {
    count += vowels.includes(item) ? 1 : 0;
  }
  str.split("").forEach(isVowel);
  return count;
}

console.log(countVowel(inputString));

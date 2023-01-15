const readline = require("readline-sync");

// User Input
let inputString = String(readline.question());

// Normal Function
function replaceWithNextCharN(str) {
  let charArray = str.split("");
  for (let item = 0; item < charArray.length; item++) {
    let n = charArray[item].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    charArray[item] = String.fromCharCode(n + "a".charCodeAt());
  }
  return charArray.join("");
}
console.log(replaceWithNextCharN(inputString));

// Arrow Function
let replaceWithNextCharA = (str) => {
  let charArray = str.split("");
  for (let item = 0; item < charArray.length; item++) {
    let n = charArray[item].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    charArray[item] = String.fromCharCode(n + "a".charCodeAt());
  }
  return charArray.join("");
};
console.log(replaceWithNextCharA(inputString));

// Exporting Functions
module.exports = { replaceWithNextCharN, replaceWithNextCharA };

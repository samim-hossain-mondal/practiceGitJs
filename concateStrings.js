const readline = require("readline-sync");

// User Inputs
let inputString1 = String(readline.question());
let inputString2 = String(readline.question());

// Normal Function
function concateStringsWithoutFirstLetterN(str1, str2) {
  return str1.substr(1, str1.length) + str2.substr(1, str2.length);
}
console.log(concateStringsWithoutFirstLetterN(inputString1, inputString2));

// Arrow Function
let concateStringsWithoutFirstLetterA = (str1, str2) => {
  return str1.substr(1, str1.length) + str2.substr(1, str2.length);
};
console.log(concateStringsWithoutFirstLetterA(inputString1, inputString2));

// Exporting Functions
module.exports = {
  concateStringsWithoutFirstLetterN,
  concateStringsWithoutFirstLetterA,
};

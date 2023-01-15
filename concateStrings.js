const readline = require("readline-sync");

let inputString1 = String(readline.question());
let inputString2 = String(readline.question());

function concateStringsWithoutFirstLetterN(str1, str2) {
  return str1.substr(1, str1.length) + str2.substr(1, str2.length);
}

let concateStringsWithoutFirstLetterA = (str1, str2) => {
  return str1.substr(1, str1.length) + str2.substr(1, str2.length);
};

console.log(concateStringsWithoutFirstLetterN(inputString1, inputString2));
console.log(concateStringsWithoutFirstLetterA(inputString1, inputString2));

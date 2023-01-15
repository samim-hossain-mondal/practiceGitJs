const readline = require("readline-sync");

let inputString1 = String(readline.question());
let inputString2 = String(readline.question());

function concateStringsWithoutFirstLetter(str1, str2) {
  return str1.substr(1, str1.length) + str2.substr(1, str2.length);
}

console.log(concateStringsWithoutFirstLetter(inputString1, inputString2));

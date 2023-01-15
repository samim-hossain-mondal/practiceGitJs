const readline = require("readline-sync");

// User Input
let number = Number(readline.question());

// Normal Function
let resultN = 0;
function isSameDigitNumberN(num) {
  resultN = Number(String(num).split("").reverse().join(""));
  return resultN === num
    ? "True: It is a same digit number"
    : "False: It is not a same digit number";
}
console.log(isSameDigitNumberN(number));

// Arrow Function
let resultA = 0;
let isSameDigitNumberA = (num) => {
  resultA = Number(String(num).split("").reverse().join(""));
  return resultA === num
    ? "True: It is a same digit number"
    : "False: It is not a same digit number";
};
console.log(isSameDigitNumberA(number));

// Exporting Functions
module.exports = { isSameDigitNumberN, isSameDigitNumberA };

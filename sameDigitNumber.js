const readline = require("readline-sync");
let number = Number(readline.question());

let resultN = 0;
function isSameDigitNumberN(num) {
  resultN = Number(String(num).split("").reverse().join(""));
  return result === num
    ? "True: It is a same digit number"
    : "False: It is not a same digit number";
}

let resultA = 0;
let isSameDigitNumberA = (num) => {
  resultA = Number(String(num).split("").reverse().join(""));
  return result === num
    ? "True: It is a same digit number"
    : "False: It is not a same digit number";
};
console.log(isSameDigitNumberN(number));
console.log(isSameDigitNumberA(number));

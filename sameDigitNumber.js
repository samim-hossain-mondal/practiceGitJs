const readline = require("readline-sync");

let number = Number(readline.question());
let result = 0;
function isSameDigitNumber(num) {
  result = Number(String(num).split("").reverse().join(""));
  return result === num
    ? "True: It is a same digit number"
    : "False: It is not a same digit number";
}
console.log(isSameDigitNumber(number));

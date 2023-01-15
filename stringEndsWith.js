const readline = require("readline-sync");
let inputString = String(readline.question());

function checkEndsWithN(str) {
  let checkStr = "Script";
  return str.endsWith(checkStr);
}

let checkEndsWithA = (str) => {
  let checkStr = "Script";
  return str.endsWith(checkStr);
};

console.log(checkEndsWithN(inputString));
console.log(checkEndsWithA(inputString));

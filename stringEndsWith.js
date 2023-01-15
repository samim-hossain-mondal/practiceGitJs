const readline = require("readline-sync");

let inputString = String(readline.question());

function checkEndsWith(str) {
  let checkStr = "Script";
  return str.endsWith(checkStr);
}

console.log(checkEndsWith(inputString));

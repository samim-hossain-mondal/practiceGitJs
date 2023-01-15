const readline = require("readline-sync");

// User Input
let inputString = String(readline.question());

// Normal Function
function checkEndsWithN(str) {
  let checkStr = "Script";
  return str.endsWith(checkStr);
}
console.log(checkEndsWithN(inputString));

// Arrow Function
let checkEndsWithA = (str) => {
  let checkStr = "Script";
  return str.endsWith(checkStr);
};
console.log(checkEndsWithA(inputString));

// Exporting Functions
module.exports = { checkEndsWithN, checkEndsWithA };

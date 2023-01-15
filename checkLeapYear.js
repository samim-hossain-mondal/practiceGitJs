const readline = require("readline-sync");

// User Input
let year = Number(readline.question());

// Normal Function
function checkLeapYearN(year) {
  return (0 == year % 4 && 0 != year % 100) || 0 == year % 400
    ? `${year} is a leap year"`
    : `${year} is not a leap year`;
}
console.log(checkLeapYearN(year));

// Arrow Function
let checkLeapYearA = (year) => {
  return (0 == year % 4 && 0 != year % 100) || 0 == year % 400
    ? `${year} is a leap year"`
    : `${year} is not a leap year`;
};
console.log(checkLeapYearA(year));

// Exporting Functions
module.exports = { checkLeapYearN, checkLeapYearA };

const readline = require("readline-sync");

let year = Number(readline.question());
function checkLeapYear(year) {
  return (0 == year % 4 && 0 != year % 100) || 0 == year % 400
    ? `${year} is a leap year"`
    : `${year} is not a leap year`;
}

console.log(checkLeapYear(year));

const readline = require("readline-sync");

let inputString = String(readline.question());

const isUpperCase = (char) =>
  char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
const isLowerCase = (char) =>
  char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;

function alterCaseN(str) {
  let newStr = "";
  const margin = 32;
  function checkAndAlterCase(item) {
    newStr += isLowerCase(item)
      ? String.fromCharCode(item.charCodeAt(0) - margin)
      : isUpperCase(item)
      ? String.fromCharCode(item.charCodeAt(0) + margin)
      : item;
  }
  str.split("").forEach(checkAndAlterCase);
  return newStr;
}

let alterCaseA = (str) => {
  let newStr = "";
  const margin = 32;
  function checkAndAlterCase(item) {
    newStr += isLowerCase(item)
      ? String.fromCharCode(item.charCodeAt(0) - margin)
      : isUpperCase(item)
      ? String.fromCharCode(item.charCodeAt(0) + margin)
      : item;
  }
  str.split("").forEach(checkAndAlterCase);
  return newStr;
};

console.log(alterCaseN(inputString));
console.log(alterCaseA(inputString));

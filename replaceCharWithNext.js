const readline = require("readline-sync");
let inputString = String(readline.question());

function replaceWithNextCharN(str) {
  let charArray = str.split("");
  for (let item = 0; item < charArray.length; item++) {
    let n = charArray[item].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    charArray[item] = String.fromCharCode(n + "a".charCodeAt());
  }
  return charArray.join("");
}

let replaceWithNextCharA = (str) => {
  let charArray = str.split("");
  for (let item = 0; item < charArray.length; item++) {
    let n = charArray[item].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    charArray[item] = String.fromCharCode(n + "a".charCodeAt());
  }
  return charArray.join("");
};

console.log(replaceWithNextCharN(inputString));
console.log(replaceWithNextCharA(inputString));

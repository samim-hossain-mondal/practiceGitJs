const readline = require("readline-sync");
let inputString = String(readline.question());

function replaceWithNextChar(str) {
  let charArray = str.split("");
  for (let item = 0; item < charArray.length; item++) {
    let n = charArray[item].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    charArray[item] = String.fromCharCode(n + "a".charCodeAt());
  }
  return charArray.join("");
}

console.log(replaceWithNextChar(inputString));

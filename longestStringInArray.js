const readline = require("readline-sync");

let arrSize = Number(readline.question());
let arr = [];
for (let i = 0; i < arrSize; ++i) {
  arr.push(String(readline.question()));
}

function longestStrInArrayN(arr) {
  let maxStr = arr[0].length;
  let ans = arr[0];

  function findlongestStr(item) {
    let maxi = item.length;
    ans = maxi > maxStr ? item : ans;
    maxStr = maxi > maxStr ? maxi : maxStr;
  }
  arr.forEach(findlongestStr);
  return ans;
}

let longestStrInArrayA = (arr) => {
  let maxStr = arr[0].length;
  let ans = arr[0];

  function findlongestStr(item) {
    let maxi = item.length;
    ans = maxi > maxStr ? item : ans;
    maxStr = maxi > maxStr ? maxi : maxStr;
  }
  arr.forEach(findlongestStr);
  return ans;
};

console.log(longestStrInArrayN(arr));
console.log(longestStrInArrayA(arr));

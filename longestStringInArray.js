const readline = require("readline-sync");

// User Input for array and arraySize
let arrSize = Number(readline.question());
let arr = [];
for (let i = 0; i < arrSize; ++i) {
  arr.push(String(readline.question()));
}

// Normal Function
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
console.log(longestStrInArrayN(arr));

// Arrow Function
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
console.log(longestStrInArrayA(arr));

// Exporting Functions
module.exports = { longestStrInArrayN, longestStrInArrayA };

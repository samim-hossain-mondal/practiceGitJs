const file = require("./countVowels");

const countVowelN = file.countVowelN;
const countVowelA = file.countVowelA;

test("Testing countVowelN function", () => {
  expect(countVowelN("Codeacademy")).toBe(5);
  expect(countVowelN("McKinsey")).toBe(2);
  expect(countVowelN("Samim")).toBe(2);
});

test("Testing countVowelA function", () => {
  expect(countVowelA("Codeacademy")).toBe(5);
  expect(countVowelA("McKinsey")).toBe(2);
  expect(countVowelA("Samim")).toBe(2);
});

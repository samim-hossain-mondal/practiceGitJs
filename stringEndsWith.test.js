const file = require("./stringEndsWith");
let checkEndsWithN = file.checkEndsWithN;
let checkEndsWithA = file.checkEndsWithA;

test("Testing checkEndsWithN function", () => {
  expect(checkEndsWithN("javascript")).toBe(false);
  expect(checkEndsWithN("javaScript")).toBe(true);
  expect(checkEndsWithN("TypeScriptscript")).toBe(false);
});

test("Testing checkEndsWithA function", () => {
  expect(checkEndsWithA("JavaScript")).toBe(true);
  expect(checkEndsWithA("JScript")).toBe(true);
  expect(checkEndsWithA("Script")).toBe(true);
});

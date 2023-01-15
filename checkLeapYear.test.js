const file = require("./checkLeapYear");
const checkLeapYearN = file.checkLeapYearN;
const checkLeapYearA = file.checkLeapYearA;

test("Testing checkLeapYearN function", () => {
  expect(checkLeapYearN(2024)).toBe(true);
  expect(checkLeapYearN(2022)).toBe(false);
  expect(checkLeapYearN(2000)).toBe(true);
});

test("Testing checkLeapYearA function", () => {
  expect(checkLeapYearA(2024)).toBe(true);
  expect(checkLeapYearA(2022)).toBe(false);
  expect(checkLeapYearA(2000)).toBe(true);
});

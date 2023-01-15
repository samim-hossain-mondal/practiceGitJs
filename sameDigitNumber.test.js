const file = require("./sameDigitNumber");

const isSameDigitNumberA = file.isSameDigitNumberA;
const isSameDigitNumberN = file.isSameDigitNumberN;

test("Testing sameDigitNumber normal function", () => {
  expect(isSameDigitNumberN(222)).toBe(true);
  expect(isSameDigitNumberN(232)).toBe(false);
  expect(isSameDigitNumberN(999999999)).toBe(true);
});

test("Testing sameDigitNumber arrow function", () => {
  expect(isSameDigitNumberA(00000)).toBe(true);
  expect(isSameDigitNumberA(22)).toBe(true);
  expect(isSameDigitNumberA(211111112)).toBe(false);
});

const file = require("./largestEvenNumber");

const largestEvenNumberN = file.largestEvenNumberN;
const largestEvenNumberA = file.largestEvenNumberA;

test("Testing largestEvenNumberN function", () => {
  expect(largestEvenNumberN([1, 2, 3, 4, 5])).toBe(4);
  expect(largestEvenNumberN([11, 23, 95, 7])).toBe(-1);
  expect(largestEvenNumberN([18, 37, -42, -8])).toBe(18);
});

test("Testing largestEvenNumberA function", () => {
  expect(largestEvenNumberA([1, 2, 3, 4, 5])).toBe(4);
  expect(largestEvenNumberA([11, 23, 95, 7])).toBe(-1);
  expect(largestEvenNumberA([18, 37, -42, -8])).toBe(18);
});

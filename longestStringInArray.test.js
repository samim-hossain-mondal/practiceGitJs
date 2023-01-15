const file = require("./longestStringInArray");
const longestStrInArrayN = file.longestStrInArrayN;
const longestStrInArrayA = file.longestStrInArrayA;

test("Testing longestStrInArrayN function", () => {
  expect(longestStrInArrayN(["code", "academy"])).toBe("academy");
  expect(longestStrInArrayN(["I", "love", "coding"])).toBe("coding");
  expect(longestStrInArrayN(["Mckinsey&Company", "code", ""])).toBe(
    "Mckinsey&Company"
  );
});

test("Testing longestStrInArrayA function", () => {
  expect(longestStrInArrayA(["code", "academy"])).toBe("academy");
  expect(longestStrInArrayA(["I", "love", "coding"])).toBe("coding");
  expect(longestStrInArrayA(["Mckinsey&Company", "code", ""])).toBe(
    "Mckinsey&Company"
  );
});

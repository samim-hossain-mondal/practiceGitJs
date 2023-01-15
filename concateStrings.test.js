const file = require("./concateStrings");

const concateStringsWithoutFirstLetterN =
  file.concateStringsWithoutFirstLetterN;
const concateStringsWithoutFirstLetterA =
  file.concateStringsWithoutFirstLetterA;

test("Testing concateStringsWithoutFirstLetterN function", () => {
  expect(concateStringsWithoutFirstLetterN(["code", "academy"])).toBe(
    "odecademy"
  );
  expect(concateStringsWithoutFirstLetterN(["Samim", "Mondal"])).toBe(
    "amimondal"
  );
  expect(concateStringsWithoutFirstLetterN(["McKinsey", "Company"])).toBe(
    "cKinseyompany"
  );
});

test("Testing concateStringsWithoutFirstLetterA function", () => {
  expect(concateStringsWithoutFirstLetterA(["code", "academy"])).toBe(
    "odecademy"
  );
  expect(concateStringsWithoutFirstLetterA(["Samim", "Mondal"])).toBe(
    "amimondal"
  );
  expect(concateStringsWithoutFirstLetterA(["McKinsey", "Company"])).toBe(
    "cKinseyompany"
  );
});

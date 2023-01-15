const file = require("./replaceCharWithNext");

let replaceWithNextCharA = file.replaceWithNextCharA;
let replaceWithNextCharN = file.replaceWithNextCharN;

test("Testing replaceWithNextCharA function", () => {
  expect(replaceWithNextCharA("Codeacademy")).toBe("Dpefbdbefnz");
  expect(replaceWithNextCharA("lazYinterns")).toBe("mbaZjoufsot");
  expect(replaceWithNextCharA("McKinsey")).toBe("NdLjotfz");
});

test("Testing replaceWithNextCharN function", () => {
  expect(replaceWithNextCharN("codeacademy")).toBe("dpefbdbefnz");
  expect(replaceWithNextCharN("lazyinterns")).toBe("mbazjoufsot");
  expect(replaceWithNextCharN("McKinsey")).toBe("NdLjotfz");
});

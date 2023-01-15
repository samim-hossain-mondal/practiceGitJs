const file = require("./alternateStringCase");

const alterCaseN = file.alterCaseN;
const alterCaseA = file.alterCaseA;

test("Testing alterCaseN function", () => {
  expect(alterCaseN("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
  expect(alterCaseN("CodeAcademy")).toBe("cODEaCADEMY");
  expect(alterCaseN("SAMIMmondal")).toBe("samimMondal");
});

test("Testing alterCaseA function", () => {
  expect(alterCaseA("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
  expect(alterCaseA("CodeAcademy")).toBe("cODEaCADEMY");
  expect(alterCaseA("SAMIMmondal")).toBe("samimMondal");
});

const analyzeArray = require("../scripts/anlyzeArray");

test("should return correct analysis for an array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("should return correct analysis for an array with negative numbers", () => {
  const result = analyzeArray([-5, 0, 5, -10, 10]);

  expect(result).toEqual({
    average: 0,
    min: -10,
    max: 10,
    length: 5,
  });
});

test("analyzeArray should handle an empty array", () => {
  const result = analyzeArray([]);

  expect(result).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});

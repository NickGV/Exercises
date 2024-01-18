const Calculator = require("../scripts/calculator");

describe("Calculator", () => {
  calculator = new Calculator();

  test("should be add two numbers", () => {
    expect(calculator.add(3, 7)).toBe(10);
  });

  test("should be substract two numbers ", () => {
    expect(calculator.subtrac(9, 10)).toBe(-1);
  });
  test("should multiply two numbers", () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });
  test("should ", () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });
});

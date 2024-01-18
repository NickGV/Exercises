const reverseString = require("../scripts/reverseString");

test("ReverseStrign should reverse a simple string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Should handle a string with spaces and punctuations", () => {
  expect(reverseString("Hello World!!.")).toBe(".!!dlroW olleH");
});

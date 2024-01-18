const capitalize = require("../scripts/capitalize");
test("capitalize should capitalize the first letter of each word", () => {
  const result = capitalize("hello world");
  expect(result).toBe("Hello World");
});

test("capitalize should handle strings with uppercase and lowercase letters", () => {
  const result = capitalize("tHe yELLOW eLEPHANT");
  expect(result).toBe("The Yellow Elephant");
});

test("capitalize should handle strings with spaces at the beginning or end", () => {
  const result = capitalize("    spaces at the beginning and end   ");
  expect(result).toBe("Spaces At The Beginning And End");
});

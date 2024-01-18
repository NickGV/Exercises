const caesarCipher = require("../scripts/ceaserCipher");

test("caesarCipher should shift characters in a string by the specified shift factor", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("caesarCipher should handle wrapping from z to a", () => {
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("Zebra", 5)).toBe("Ejgwf");
});

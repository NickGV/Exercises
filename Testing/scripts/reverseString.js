function reverseString(string) {
  return string.split("").reverse().join("").replaceAll(",", "");
}

module.exports = reverseString;

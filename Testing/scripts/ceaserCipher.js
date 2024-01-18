function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift) {
  if (char.match(/[a-z]/i)) {
    const code = char.charCodeAt(0);
    const shiftedCode = code + shift;
    const baseCode =
      char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
    const normalizedShiftedCode =
      ((shiftedCode - baseCode + 26) % 26) + baseCode;
    return String.fromCharCode(normalizedShiftedCode);
  }
  return char;
}

module.exports = caesarCipher;

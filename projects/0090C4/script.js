function bEF(string) {
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4);
  }
  return output;
}
function bDF(string) {
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4);
  }
  return output.toString();
}

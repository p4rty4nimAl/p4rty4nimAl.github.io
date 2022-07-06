function bEF(string) {
  hashedK = hash(document.getElementById("key").value);
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4 - hashedK[i % hashedK.length].charCodeAt());
  }
  return output;
}
function bDF(string) {
  hashedK = hash(document.getElementById("key").value);
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4 + hashedK[i % hashedK.length].charCodeAt());
  }
  return output.toString();
}

//bEF == baseEncipherFunction()
//bDF == baseDecipherFunction()
function bEF(string) {
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output = output + getChar((getVal(string[i]) + getVal(string[i - 1])) % 32);
  }
  return output;
}
function bDF(string) {
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output = output + getChar((getVal(string[i]) - getVal(output[i - 1])) % 32);
  }
  return output;
}
function reverseString(string) {
  output = "";
  for (i = 0; i < string.length; i++) {
    output = string[i] + output;
  }
  return output;
}

function getVal(char) {
  if (!(char == undefined)) {
      return char.toLowerCase().charCodeAt(0) - 96;
  }
}
function getChar(val) {
  return String.fromCharCode(val + 96);
}
function encipher() {
  document.getElementById("output").value = reverseString(bEF(reverseString(bEF(document.getElementById("input").value))));
}
function decipher() {
  document.getElementById("input").value = bDF(reverseString(bDF(reverseString(document.getElementById("output").value)))).replaceAll("`", " ").toLowerCase();
}

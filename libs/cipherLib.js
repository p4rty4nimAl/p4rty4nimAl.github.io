/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  none
 *
*/
function reverseString(string) {
  output = "";
  for (i = 0; i < string.length; i++) {
    output = string[i] + output;
  }
  return output;
}
function getVal(char) {
  if (char != undefined) return char.toLowerCase().charCodeAt(0) - 96;
}
function getChar(val) {
  return String.fromCharCode((val % 32) + 96);
}
function encipher(keepCase) {
  if (keepCase) {
    document.getElementById("output").value = reverseString(bEF(reverseString(bEF(document.getElementById("input").value)))).replaceAll("`", " ");
  } else {
    document.getElementById("output").value = reverseString(bEF(reverseString(bEF(document.getElementById("input").value)))).replaceAll("`", " ").toLowerCase();
  }
}
function decipher(keepCase) {
  if (keepCase) {
    document.getElementById("input").value = bDF(reverseString(bDF(reverseString(document.getElementById("output").value)))).replaceAll("`", " ");
  } else {
    document.getElementById("input").value = bDF(reverseString(bDF(reverseString(document.getElementById("output").value)))).replaceAll("`", " ").toLowerCase();
  }
}

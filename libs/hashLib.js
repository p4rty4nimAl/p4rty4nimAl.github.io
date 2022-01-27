/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  hexLib.js
 *
*/
function combineBlocks(array) {
  if (array.length == 1) return array;
  output = [];
  interm = "";
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < 64; j++) {
      interm = interm + getChar(getVal(array[i - 1][j]) ^ getVal(array[i][j]));
    }
    output.push(interm);
    interm = "";
  }
  return output.shift();
}

function hash(input) {
  string = combineBlocks(split(input.toString()));
}
function split(string) {
  while (string.length % 64 != 0) {
    string = string + "a";
  }
  string = string + "a";
  cnt = 0;
  output = [""];
  for (i = 0; i < string.length; i += 64) {
    output[cnt] = string.substring(i - 64, i);
    cnt++;
  }
  output.shift();
  return output;
}

/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  cipherLib.js
 *
 * NOTE:
 *  I, too, have no idea what the FUCK this code does, it just works
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
  return output.shift().replaceAll("\x7F", " ");
}

function hash(input) {
  if (input.length == 0) return input;
  return combineBlocks(split(entropise(input.toString())));
}

function split(string) {
  for (i = 0; string.length % 64 != 0; i++) {
    string = string + entropise(string[string.length - 1])[i % 64];
  }
  string = string + entropise(string[string.length - 1])[62];
  cnt = 0;
  output = [""];
  for (i = 0; i < string.length; i += 64) {
    output[cnt] = string.substring(i - 64, i);
    cnt++;
  }
  output.shift();
  return output;
}

function entropise(string) {
  if (string.length > 64) return string;
  strLen = string.length;
  string += getChar(Math.sqrt(strLen ** 3) + 2 * (getTotalVal(string, 0) + getTotalVal(string, 1)));
  strLen++;
  return entropise(string)//.replaceAll("\x7F", " ");
}

function getTotalVal(string, mode) {
  total = 0
  switch (mode) {
    case 0:
      for (i = 0; i < string.length; i++) {
        total += getVal(string[i]);
      }
      return total;
    default:
      for (i = 0; i < string.length; i++) {
        if (i % 2 == 0) total = Math.max(total, 1) * Math.ceil((getVal(string[i])));
      }
      return total;
  }

}

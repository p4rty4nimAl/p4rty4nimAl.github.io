/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  cipherLib.js
 *
 * NOTE:
 *  I, too, have no idea what the FUCK this code does, it just works
*/
complexity = 2;
function setComplexity(intC) {
  complexity = intC;
}
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
  return combineBlocks(output)//.replaceAll("\x7F", " ");
}

function hash(input) {
  if (input.length == 0) return input;
  return rentropise(combineBlocks(split(rentropise(input.toString())))).replaceAll("\x7F", " ").substring(0, 63);
}

function split(string) {
  for (i = 0; string.length % 64 != 0; i++) {
    string = string + rentropise(string[string.length - 1])[i % 256];
  }
  string = string + rentropise(string[string.length - 1])[62];
  cnt = 0;
  output = [""];
  for (i = 0; i < string.length; i += 64) {
    output[cnt] = string.substring(i - 64, i);
    cnt++;
  }
  output.shift();
  return output;
}

function rentropise(string) {
  sL = string.length;
  return entropise(string, sL);
}
function entropise(string, sL) {
  if (string.length > 64 * complexity) return string;
  strLen = string.length;
  string += getChar(sL ** 2 + Math.sqrt(strLen ** 3) + 2 * (getTotalVal(string, 0) + getTotalVal(string, 1)));
  strLen++;
  return entropise(string, 0)//.replaceAll("\x7F", " ");
}

function getTotalVal(string, mode) {
  total = 0;
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

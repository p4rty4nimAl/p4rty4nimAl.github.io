/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  cipherLib.js
 *
 * NOTE:
 *  I, too, have no idea what the FUCK this code does, it just works
*/
/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  cipherLib.js
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
  return output.shift().replaceAll("\x7F", " ");
}

function hash(input) {
  return combineBlocks(split(entropise(input.toString())));
}
function split(string) {
  for (i = 0; string.length % 64 != 0; i++) {
    string = string + string[i];
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
function entropise(string) {
  if (string.length > 128) return string;
  inc = 1;
  cnt = 0;
  test = 0;
  for (i = 0; i < string.length; i += 2) {
    test += getVal(string[i]);
  }
  for (i = 0; i < string.length; i++) {
    cnt = cnt + getVal(string[i]);
  }
  if (cnt == -32) string = string.substring(0, string.length - 2) + "a";
  for (i = string.length; string.length < 128; i++) {
    string = string + getChar(((getVal(string[i - 1]) ** 2) ^ (i ** 3) % 17) + inc * test);
    inc = inc + (getVal(string[i]) ** 2) % 32 + i;
  }
  if (string.includes("`````")) console.log(entropise(string.replaceAll("`", "")));
  return string.replaceAll("\x7F", " ");
}

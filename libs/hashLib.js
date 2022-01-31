/*
 *
 * BY: p4rty4nimAl
 * REQUIRES:
 *  cipherLib.js
 *
 * NOTE:
 *  I, too, have no idea what the FUCK this code does, it just works
*/
function KCRC(string, key) {
  register = 0;
  output = "";
  for (i = 0; i < string.length; i++) {
    register = (register + getVal(string[i])) % 32;
    output = output + getChar(register);
  }
  string = output;
  output = "";
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) ^ getVal(key[i % key.length]));
  }
  return output;
}
function CRC(string) {
  register = 0;
  output = "";
  for (i = 0; i < string.length; i++) {
    register = (register + getVal(string[i])) % 32;
    output = output + getChar(register ^ i);
  }
  return output;
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
  return output.shift().replaceAll("\x7F", " ");
}

function hash(input) {
  return combineBlocks(split(entropise(input.toString()))).toLowerCase().replaceAll("\x7F", " ");
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
  cnt = 0;
  if (string.length > 128) return string;
  inc = 1;
  for (i = 0; i < string.length; i++) {
    cnt = cnt + getVal(string[i]);
  }
  if (cnt == -32) string = string.substring(0, string.length - 2) + "a";
  for (i = string.length; string.length < 128; i++) {
    string = string + getChar(((getVal(string[i - 1]) ** 2) ^ i) + inc);
    inc = inc + (getVal(string[i]) ** 2) % 32 + i;
  }
  output = "";
  for (i = 0; i < string.length; i += 2) output += string[i];
  return CRC(KCRC(string, output)).replaceAll("\x7F", " ").replaceAll("`", "");
}

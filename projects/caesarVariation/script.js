//bEF == baseEncipherFunction()
//bDF == baseDecipherFunction()
function bEF(string) {
  output = "";
  constant = ((string.length % 16 == 0) ? 1 : string.length % 32);
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) + (constant) % 32);
  }
  return output;
}
function bDF(string) {
  output = "";
  constant = ((string.length % 32 == 0) ? 1 : string.length);
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) - (constant) % 32);
  }
  return output;
}

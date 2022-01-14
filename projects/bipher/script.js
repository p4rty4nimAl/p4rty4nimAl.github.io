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

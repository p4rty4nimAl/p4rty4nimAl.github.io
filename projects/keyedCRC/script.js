//bEF == baseEncipherFunction()
//bDF == baseDecipherFunction()
function bEF(string) {
  register = 0;
  output = "";
  key = document.getElementById("key").value;
  for (i = 0; i < string.length; i++) {
    register = (register + getVal(string[i])) % 32;
    output = output + getChar(register);
  }
  string = output;
  output = "";
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) + getVal(key[i % key.length]));
  }
  return output;
}
function bDF(string) {
  output = "";
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) - getVal(key[i % key.length]));
  }
  string = output;
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) - getVal(string[i - 1]));
  }
  return output;
}

function bEF(stringE) {
  register = 0;
  output = "";
  for (i = 0; i < stringE.length; i++) {
    register = (register + getVal(stringE[i])) % 32;
    output = output + getChar(register);
  }
  stringE = output;
  key = hash(document.getElementById("key").value);
  output = "";
  for (i = 0; i < stringE.length; i++) {
    output = output + getChar(getVal(stringE[i]) + getVal(key[i % key.length]));
  }
  return output;
}
function bDF(string) {
  output = "";
  for (i = 0; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) - getVal(key[i % key.length]));
  }
  string = output;
  key = hash(document.getElementById("key").value);
  output = string[0];
  for (i = 1; i < string.length; i++) {
    output = output + getChar(getVal(string[i]) - getVal(string[i - 1]));
  }
  return output;
}

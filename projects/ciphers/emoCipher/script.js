function getVal(char) {
  if (!(char == undefined)) {
      return char.toLowerCase().charCodeAt(0) - 96;
  }
}
function getChar(val) {
  return String.fromCharCode(val + 96);
}

function encipher() {
  input = document.getElementById('input').value;
  output = input[0];
  for (i = 1; i < input.length; i++) {
    output = output + getChar((getVal(input[i]) + getVal(input[i - 1])) % 32);
  }
  document.getElementById('output').value = output;
}

function decipher() {
  input = document.getElementById("output").value;
  output = input[0];
  for (i = 1; i < input.length; i++) {
    output = output + getChar((getVal(input[i]) - getVal(output[i - 1])) % 32);
  }
  document.getElementById('input').value = output.replaceAll("`", " ").toLowerCase();
}
/*
function decipher(input, rotate) {
  return input.replace(/[a-zA-Z]/g, function (char) {
    return String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + rotate) ? char : char - 26);
  });
  document.getElementById('input').value = rot(document.getElementById('output').value, +document.getElementById('rot').value);
}
*/

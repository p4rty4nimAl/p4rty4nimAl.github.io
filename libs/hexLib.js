function addHex(num1, num2) {
    return toHex(toDen(num1) + toDen(num2));
}
function subHex(num1, num2) {
  return toHex(toDen(num1) - toDen(num2));
}
function mulHex(num1, num2) {
  return toHex(toDen(num1) * toDen(num2));
}
function divHex(num1, num2) {
  return toHex(toDen(num1) / toDen(num2));
}
function powHex(num1, num2) {
  return toHex(toDen(num1) ^ toDen(num2));
}

function toHex(num) {
  return num.toString(16);
}
function toDen(num) {
  return parseInt(num, 16);
}

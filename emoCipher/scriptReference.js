/*function rot(s, i) {
  return s.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
  });
}
  //           document.getElementById('output').value = rot(document.getElementById('input').value, +document.getElementById('rot').value);
*/
let frequencies = []
function occurrences(string, subString, allowOverlapping) {

  string += "";
  subString += "";
  if (subString.length <= 0) return (string.length + 1);

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}
const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function convert(string) {

}
function letterFrequency(string) {
  frequencies = []
  for(let i = 0; i < alphabetArray.length; i++) {
    frequencies.push(occurrences(string, alphabetArray[i]))
    console.log(frequencies)
  }
}
function sounds(string) {
  let phoneticArray1 = ["ah", "buh", "cuh", "duh", "eh", "fuh", "guh", "hh", "ih", "juh", "kuh", "luh", "uhm", "uhn", "oh", "puh", "quh", "ruh", "suh", "tuh", "uh", "vuh", "wuh", "cks", "yuh", "zuh"]
  let phoneticArray2 = ["aey", "bee", "cee", "dee", "ee", "eff", "gee", "haich", "eye", "jay", "kay", "el", "ehm", "ehn", "ohw", "pee", "queue", "are", "es", "tee", "you", "vee", "dhbhu", "ecks", "wy", "zed"]
  let output = ""
  for(let i = 0; i < string.length; i++) {
    if (alphabetArray.includes(string[i])) {
      if (randomInt(1, 2) == 1) {
        output = output + phoneticArray1[alphabetArray.indexOf(string[i])]
      } else {
        output = output + phoneticArray2[alphabetArray.indexOf(string[i])]
      }
    } else {
      output = output + string[i]
    }
  }
  console.log(output)
  return output
}
function vowelAdjust(string) {
  let vowelArray = ["a", "e", "i", "o", "u", "y"]
  let randArray = ["i", "y", "e", "o", "a", "u"]
  let output = ""
  for(let i = 0; i < string.length; i++) {
    if (vowelArray.includes(string[i])) {
      output = output + randArray[vowelArray.indexOf(string[i])]
    } else {
      output = output + string[i]
    }
  }
  console.log(output)
  return output
}
function wordLength(string) {

}
function letterPlace(string) {

}
function wordPlace(string) {

}
function randomInt(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}

letterFrequency("abcdefghijkklmnopqrstuvwxyz")

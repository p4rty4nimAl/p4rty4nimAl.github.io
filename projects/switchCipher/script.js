//bEF == baseEncipherFunction()
//bDF == baseDecipherFunction()
function bEF(string) {
  nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  output = "";

  for (i = 0; i < string.length; i++) {
    for (j = 0; j < nums.length; j++) {
      nums[j] = ((nums[j] + 1) ^ 2) % 32;
    }
    output = output + getChar(
      nums[
        nums[
          getVal(
            string[i]
          ) % 32
        ]
      ]
    )
  }
  return output;
}
function bDF(string) {
  nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  output = "";

  for (i = 0; i < string.length; i++) {
    for (j = 0; j < nums.length; j++) {
      nums[j] = ((nums[j] + 1) ^ 2) % 32;
    }
    output = output + getChar(
      nums.indexOf(
        nums.indexOf(
          getVal(
            string[i]
          )
        )
      )
    )
  }
  return output;
}

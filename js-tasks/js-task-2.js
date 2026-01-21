//1
//www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

//2
//www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//3
//www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  let min = list[0];
  for (let i = 1; i <= list.length - 1; i++) {
    if (min > list[i]) {
      min = list[i];
    }
  }
  return min;
}

var max = function (list) {
  let max = list[0];
  for (let i = 1; i <= list.length - 1; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }
  return max;
}

//4
//www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return toReturn === "value" ? min : arr.indexOf(min);
}

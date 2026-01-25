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

// Bohdan Salnyk
const DNAtoRNA = dna => {
  let result = [...dna].reduce((acc, symbol) => {
    if(symbol === "T") {
        return [...acc, "U"];
    }
    return [...acc, symbol];
  }, []);
  return result.join("");
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

// Bohdan Salnyk
const min = list => Math.min(...list);

const max = list => Math.max(...list);

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

// Bohdan Salnyk
const min = (arr, toReturn) => { 
    const minValue = Math.min(...arr);
    const indexOfMinValue = arr.indexOf(minValue);
    return toReturn === "value" ? minValue : indexOfMinValue;
}

//5
//www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = i => i * 2;

//6
//www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - (sonYearsOld * 2));

//7
//www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => (n - 1) * 2;

//8
//www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h,m,s) => {
  const allTime = s + (m * 60) + (h * 60 * 60);
  return allTime * 1000;
};

//9
//www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

//10
//www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = n => {
  if(n <= 0) return n;
  return n >= 13 ? n - 2 : n - 1;
}

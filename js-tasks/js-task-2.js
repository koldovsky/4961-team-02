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

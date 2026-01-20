//1
//www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//2
//www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return num > 0 ? -num : num;
}

//3
//www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

// sevastianov
function move(position = 0, roll = 0){
  if(roll >=1 && roll < 7){
    return position + roll * 2
  }
  return position;
}


//4
//www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  const msgOwner = "Hello boss";
  const msgElse = "Hello guest";
  return name === owner ? msgOwner : msgElse;
}



//5
//www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  const result = Math.floor(time * 0.5);
  return result;
}

//6
//www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  return flower1%2 === 0 && flower2%2 !==0 || flower1%2 !== 0 && flower2%2 ===0 ? true : false;
}

//7
//www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  const result = [];
  for(let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

//8
//www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums){
  if((typeof nums === "object" && Array.isArray(nums)) && nums.length !== 0) {
    return nums.sort((cur, next) => cur - next);
  }
  return [];
}

//9
//www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
  const finalPrice = normPrice * (discount / 100);
  return Math.floor(hol / finalPrice);
}

//10
//www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript

function onlyOne(...args) {
  if(args.length === 0) return false;
  const trueArray = args.filter(val => val === true);
  return trueArray.length === 1 ? true : false;
}

//11
//www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

function incrementer(nums) {
  return nums.map((value, index) => (value + index + 1) % 10);
}

//12
//www.codewars.com/kata/581214d54624a8232100005f/train/javascript

function matrix(array) {
    for(let i = 0; i < array.length; i++) {
      if(array[i][i] < 0) {
        array[i][i] = 0;
      } else {
        array[i][i] = 1;
      }
    }
    return array;
}

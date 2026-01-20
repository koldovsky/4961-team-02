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

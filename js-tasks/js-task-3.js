//1. Geometry Basics: Circle Circumference in 2D
//www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => {
  return 2 * (Math.PI * circle.radius);
}

//2. Training JS #12: loop statement --for..in and for..of
//www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const resultArray = [];
  for(const key in obj) {
    if(key.length === 5) {
      resultArray.push(key);
    } 
    if (obj[key].length === 5) {
      resultArray.push(obj[key]);
    }
  }
  return resultArray;
}

//3. Understanding closures - the basics
//www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n){
	let res = []
	for (let i = 0; i <= n; i++){
		res.push(function(){
			return i;
		})
	}
	return res
}

//4. Fun with ES6 Classes #2 - Animals and Inheritance
// Get Coding :)
//www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript/6976294ff9eeee75ab5ae620
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status)
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status) 
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

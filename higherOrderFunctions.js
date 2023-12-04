//functions can be assigned to a varaible. also functions can be paased into other functions as paramaters and be returned as a value.
//a higher order function is a function that acepts functions as parameters and returns them back a value.

let plusFive = (number) => {
  return number + 5;
};
console.log(plusFive(3));
let f = plusFive;
console.log(f(8)); //f has a function value and so can be invoked

//Functions are first class objects- they have built in methods and properties.
//they can be passed as arguments and returned from other functions

function callMe() {
  console.log("c me");
}

function higherOrder(func) {
  func();
}

higherOrder(callMe);

const kkkk = () => {};

//we have 4 types of higher order functions
//the map, the filter, the reduce, and the forEach method

//the reduce method iterates over array and returns a single value
const arrayOfNumm = [1, 2, 3, 4];
const sumOfNumm = arrayOfNumm.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sumOfNumm);

const sumOfNummB = arrayOfNumm.reduce((prev, curr) => prev + curr);
console.log(sumOfNummB);

//above the reduce method will sum up all elemnets in the array. it takes in a callback function
// with two parameters (acc, currValue) . On each iteration, the accumulator is the value returned
// by the last iteration, and the currValue is the current element in the array.
//optionally, a second argument can be passed which acts as the initial value of the accumulator.

function reduceMultiply(a, b) {
  return a * b;
}

const multiply = [2, 3, 4, 5, 6];

const multiplyReduce = multiply.reduce(reduceMultiply);
console.log(multiplyReduce);

const actors = [
  { name: "Denzel", networth: 500000 },
  { name: "Will", networth: 300000 },
  { name: "Halle", networth: 400000 },
  { name: "John", networth: 700000 },
];

const sumNetworth = actors.reduce((a, b) => a + b.networth, 0);
console.log(sumNetworth);

//map method - iterate and returns back your data in an array. the map does not alter the original array, it only returns its own copy
const students = ["Mike", "Nifemi", "Godson", "Fola"];

const myStudents = students.map((member) => member + "joined the class");
console.log(myStudents);

const doubleNumbers = [2, 3, 4, 5];
const doubleTheNum = doubleNumbers.map((number) => number * 2);
console.log(doubleTheNum);

const triplNummm = (yyy) => {
  return yyy.map((number) => number * 3);
};
console.log(triplNummm([3, 4, 5]));

const actorNames = actors.map((actor) => actor.name);
console.log(actorNames);

//filter method - iterates and returns data that matches a specified condition
const filterNum = [2, 4, 6, 7, 8, 9];
const filterNumResult = filterNum.filter((n) => n > 6);
console.log(filterNumResult);

const filterNetworth = actors.filter((n) => n.networth >= 400000);
console.log(filterNetworth);

const filterNum2 = [1, 2, 3, 4, 5, 6];
const filterNumResult2 = filterNum2.filter((t) => {
  return t > 3 || t < 2;
});
console.log(filterNumResult2);

//for each
let weather = ["sunny", "cloudy", "rainy"];
weather.forEach((item) => console.log(item));

weather.forEach(function (item) {
  console.log(item);
});

filterNum2.forEach((number) => console.log(number + 4));

//create a function that takes 2 params - number and greaterThan. The number should be an array
// of numbers, while greaterThan should be the condition that filters the values in the number
// and that condition should be to get all numbers grater than 3.
//create an array that will hold the result of the output. use the for of loop

function fNumbsGreaterThan(numbers, greaterThan) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > greaterThan) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

const result = fNumbsGreaterThan([1, 2, 3, 4, 5, 6], 3);
console.log(result);

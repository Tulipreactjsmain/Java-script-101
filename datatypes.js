//We have 8 datatypes in js
//strings
//numbers
//undefined
//boolean
//null
//object
//biginit
//symbol

//strings -text values and are denoted in quotes
let club = "chelsea";
let myAnswer = 'the book is called "Harry potter" ';

//numbers - js numbers are stored in decimal forms
let weight = 75;
let height = 175.56;
//how to check variable type
console.log(typeof height);

//undefined datatype is a variable without a value at initial stage
let car;
console.log(typeof car);

//booleans can only have two values - either true or false. We use them when we want to render conditional logic
let a = 10;
let c = 10;
let d = 15;
console.log(a == d);
console.log(a == c); //double == is used to compare and single "=" is used to assign value to a variable

//js datatypes are dynamic. it can be changed
let micheal = "boy";
micheal = 20;

//null is a value that represents an empty or unknown value
let balance = null;

//object are denoted in curely brackets - object can contain - an object, an array or a date method
const person = {
  name: "charles",
  club: "Madrid",
  food: "Salads",
};
console.log(person);
console.log(person.name); //dot notation
console.log(person["food"]); //bracket notation

//to add a new property to an object we reference the variable followed by the new property to be added and assign a value to it.
person.place = "onipanu";
console.log(person);

//arrays are special types of objects and are used to store multiple values in a single variable.
//arrays are zero indexed based, meaning the count starts from 0.
const shoppingList = ['sneakers', 'playstation', 'smartwatch', 'belt']
console.log(shoppingList)


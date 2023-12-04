//Functions is a block of code designed to perfom a particular task.it is executed when something calls it.

//Function Declaration
function myFunctionName() {
  console.log("Hi Function");
}

//arrow function - 2015
const myFunction = () => {
  console.log("Hi arrow function");
};

//Parameters and arguments
//parameters are used when defining a function, they are names created in function definitiom
//arguments are values the function receives from each parameter when the function is executed or invoked

function callMe(n) {
  console.log(n);
}
callMe("Tope");

//Return statement returns the first final computation of a code. anything written after the return statement is invalid

function greetMe(pp) {
  console.log(`Hi nice to meet you ${pp}`);
}
greetMe("Fola");

function addMe(a, b) {
  return a + b;
}
console.log(addMe(3, 6));
//arrow function
addMe = (a, b) => a + b;
console.log(addMe(10, 20));

function calcFoodTotal(food, tip) {
  const tipPercent = tip / 100;
  const tipAmount = food * tipPercent;
  const total = addMe(food, tipAmount);
  return total;
}

let foodTotal = calcFoodTotal(600, 10);
console.log(foodTotal);

//refer to our calFoodtotal, write a function that splits the fee among users.
// if the user is less than or equal to 1, the bill should return the total,
// but if the user is more than 1, the bill should be split among the users.

function splitBill(foodTotal, users) {
  if (users <= 1) {
    return foodTotal;
  } else if (users > 1) {
    const bill = foodTotal / users;
    return bill;
  }
}
console.log(splitBill(foodTotal, 2));

//write a function that in a parameter whose value should be an array of strings and returns back the
// value of the array with the strings capitalized which should be in a new array

function toUpperCase(stringAr) {
  let result = [];
  result.push(stringAr[0].toUpperCase());
  result.push(stringAr[1].toUpperCase());
  return result;
}
console.log(toUpperCase(["i want to eat", "we are in class"]));

//create a todos array which should be an array of objects with properties - title,
//duedate and id, their values all in string. write a function that lets you add a new item
//to the todos array.use the date get time method for the value of the id and output the id as a string.

const todos = [
  {
    Title: "Fees",
    duedate: "12-10-23",
    id: "id1",
  },
  {
    Title: "Books",
    duedate: "12-11-23",
    id: "id2",
  },
];

function todoArray(title, duedate, id) {
  todos.push({ title: title, duedate: duedate, id: id });
}
todoArray("it is monday", "2023-4-4", new Date().getTime().toString());
console.log(todos);

//write a function called cartTotal that takes in a paramater.
//the parameter should multiply the value of each item in it. Hint:
// our parameter should be an array. The parameter should have two objects properties - price and quantity,
// each with their value which shouold be a number.
//write a function that sums up the value of the two objects

function cartTotal(cartArray) {
  const cartA = cartArray[0].price * cartArray[0].quantity; //targeting the values of each property in my array
  const cartB = cartArray[1].price * cartArray[1].quantity;
  const total = addMe(cartA, cartB);
  return total;
}
console.log(
  cartTotal([
    { price: 300, quantity: 3 },
    { price: 500, quantity: 5 },
  ])
);

// Create a function that tells how many bottles of milk can be bought if 1 bottle costs $1.5

const promptInput = console.log("Enter the amount of money you have:");
const money = parseFloat(promptInput);

function getMilk(money) {
  if (money > 1.5) {
    const milkPrice = 1.5;
    const bottles = Math.floor(money / milkPrice);
    alert(`Got ${bottles} bottles of milk`);
  } else {
    console.log("Cannot afford");
  }
}

getMilk(money);


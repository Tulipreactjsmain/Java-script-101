
// use if -statement to specify a block of code to be executed if the condition is true
//use else- to specify the same block of code to be executed if the same condition is false
//else if-  to specify a new condition to test, if the first condition is false

const checkAmount = 1000;

//if
if (checkAmount > 600) {
  console.log("yes");
}

//ifelse
if (checkAmount > 200) {
  console.log("yes");
} else {
  console.log("no");
}

//else if
if (checkAmount >= 1000) {
  console.log("");
} else if (checkAmount <= 500) {
  console.log("you failed");
} else {
  console.log("try again");
}

//rewrite if else- using Ternary Operators
checkAmount > 200 ? "Yes" : "no";

//switch statement perform a series of actions based on different conditions
//the switch statement is eveluated once
//the value is compared with the value of each case
//if there is a match , the associated block of code is executed
//if there is no match , the default block of code is executed

let ai = 2;

switch (ai) {
  case 1:
    ai = "one";
    break;
  case 2:
    ai = "two";
    break;
  case 3:
    ai = "three";
    break;
}

console.log(`the value is${ai}`);
//here ai=2, the expression result is evsluated ith case 1 which returns false because 1!=2
//The sitch statement goeas to the second case anrd the result the case which is 2
//The break statement terminates the execution once the condition is matched.

//if none is matched, it uses the default value specified

// const operator = prompt("Enter operator (either +, -, *, or /)");

// let result;
// const number1 = parseFloat(prompt("Enter first number"));
// const number2 = parseFloat(prompt("Enter second number"));

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     console.log(`${number1} + ${number2}=${result}`);
//     break;
//   case "-":
//     result = number1 - number2;
//     console.log(`${number1} - ${number2}=${result}`);
//     break;
//   case "*":
//     result = number1 * number2;
//     console.log(`${number1} * ${number2}=${result}`);
//     break;
//   case "/":
//     result = number1 / number2;
//     console.log(`${number1} / ${number2}=${result}`);
//     break;
//   default:
//     console.log("invalid operator");
// }


switch(new Date().getDay()){
    case 0:
        console.log ('it is not weekend')
        break
        case 1:
            console.log ('its the start of the eek')
            break
            case 3:
                console.log ('its yesterday')
                break
                case 4:
                console.log ('its today')
                break
                case 5:
                console.log ('its tomorrow')
                break
                case 6:
                console.log ('its saturday')
                break
                default:
                console.log ('its nothing')
                break
} 




//// ..............ASSIGNMENT.................../////


//Write a code which asks for a question using prompt method.
//the question should say 'Who's Solution there?'
//if the question reply is 'Dami', it should prompt for a password
//if the password reply is 'javascript', use the alert method in javascript and output 'Welcome'
//if there is no password, alert 'cancelled'
//if the password is not 'javascript', alert 'wrong password'
//if there is no question, alert 'cancelled'
//if the question reply is not 'Dami', alert 'I don't know you'

var question = prompt("Who's Solution there?");

if (question === "Dami") {
  var password = prompt("Enter the password:");
  
  if (password === "javascript") {
    alert("Welcome");
  } else if (password === null || password === "") {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (question === null || question === "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}



/// .............Charles's Solution.........//////


let question = prompt('Who is there?')
if (question == 'Dami') {
  let password = prompt('Enter password')
  if (password == 'javascript') {
    alert('Welcome')
  } else if (!password) {
    alert('cancelled')
  } else if (password !== 'javascript') {
    alert('wrong password')
  }
} else if (!question) {
  alert('pls enter a question')
} else if (question !== 'Dami') {
  alert('I do not know you')
}
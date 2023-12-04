message = 'hello'


// Variables are place holders used to store values.
// We have 3 ways of variables
// var, let, & const keyword for declaring variables 


var greet = 'good morning'
let today = 'monday'

// YOU cannot redeclare a 'let' variable but you can re-assign the value of a 'let' variable
 
console.log(today)
today = 'wednesday'
console.log(today)
const tomorrow = 'tuesday'

let myPhone //camelcase
let Myphone //pascalcase

//you cannot give a hyphen to your variable name 

//variables must begin either with a letter, a dollar sign, or an underscore, but not a number 
//variables are case sensitive - myname is not same as myName

//js expression contains variables, operators that computes a value
let x = 10
let y = 6
let z = x + y 
console.log(z)

//block scope variables cannot be acceses from the outside
{
    let b = 5
    console.log(b)
}

//global scope
let b = 5
console.log(b)

var r = 12
{
    var r = 20
}
console.log(r)

//concatenate - add things together
const yourName = 'John'
const yourNameB ='Doe'
const yourFullName = yourName + '' + yourNameB
console.log(yourFullName)

//java script reads from left to right 
let addNumString = '5' + 2 + 5
console.log(addNumString)
let reverseNumString = 2 + 5 + '5'
console.log(reverseNumString)



const name = 'Tulip'
const greeting = 'My name is Tulip'
const myGreeting = name + ' ' + greeting

console.log(myGreeting)
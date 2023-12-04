//operators are used to asign values, compare values and perform arithmetic operations

//assignment operator "=" assigns a value to a variable
let abc ='letters'

//addition operator
let zz= 10+ 20

//multiplication
let ac = 40 * 10

//exponential- raised to the power of
let ad = 5 ** 2

//division
let ae = 5/2

//modulus - Division remainder when you do a division
let af = 5 % 2 

//increment
let ag = 6
ag++
console.log(ag)

//decrement
let ah = 6
ah --
console.log(ah)

//comparison operators
// == equal to (loose equality)
// === equal value and data type (strict equality)
// != not of equal value and data type
// > greater than
// < less than
// >= greater than or equal to
// <= greater than or equal to
// <= less than or equal to
// ? ternary operators- used to compare two things and works based on condition


const rr = 5, bb = 2, cc = "Hello"
//equal to
console.log(rr == 5);// true
console.log(bb == '2'); //true
console.log(cc == 'Hello');// false

//not equal to
console.log(rr !=2)//true
console.log(cc !='Hello')//true

//strict equal to
console.log(rr === 5 )//true
console.log(rr === '5' )//false


//strict inequality
console.log(rr !== 5 )//false
console.log(rr !== '5' )//true
console.log(rr !== 'Hello' )//true

//greater than
console.log(rr >= 5 )//true

//Ternary Operators
const scoreline = 80
const scoreboard = scoreline > 70 ? 'Excellent' : 'do better'
console.log(scoreboard);

const pass = false
const verdict =pass ? 'success' : 'poor'
console.log(verdict)

//logical operators
//There are 3 logical operators

// && logical and - if the first value is true, the second value will be assigned

// || logical or - is used beteen two or more values, and amounts to true as long as one fulfils a condition

// ! logical not - if the first value is false, then the second value is assigned


// logical or
let now = ''
let later = ''
let next = 'alright'
console.log(now  || later|| next);

const pen=true, biro =false, eraser =10
console.log(pen || biro);//false
console.log(biro || biro);//false
console.log(eraser > 5 || eraser < 5);//true 

//logical &&
console.log(rr >2 && rr < 2)//false
console.log(1 && 0);//0

//logical not
console.log(!pen);//false
console.log(!biro);//true
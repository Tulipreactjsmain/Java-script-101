//loops are used to execute a code a number of times.they are useful if you want to get different result each time, with a diff value.
//we have 5 types of loop
// for loop
//while loop
//do-while loop
//for-in loop
//for-of loop

//for loop iterates the elements for a fixed number of times. the syntax is given
//for (initailization, condition; increment) {code }
const fruitNames = ['pear', 'orange', 'apple']
// console.log(fruitNames[0])
// console.log(fruitNames[1])
// console.log(fruitNames[2])

//for loop
for (let i = 0; i < fruitNames.length; i++) {
  console.log(i, fruitNames[i])
}

const numberss = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < numberss.length; i++) {
  console.log(numberss[i] * 2)
}
for (let i = 0; i < numberss.length; i++) {
  console.log(numberss[i] + 2)
}

//for of loop - objects
for (let book of numberss) {
  console.log(book * 3)
}
for (let book of numberss) {
  console.log(book - 3)
}
let numArray = []
for (let book of numberss) {
  numArray.push(book + 4)
}
console.log(numArray)

const sumOfNumbers = (numbers) => {
  let result = 0
  for (const number of numbers) {
    result = result + number
  }
  return result
}
console.log(sumOfNumbers([3, 4, 5, 6, 7]))

//triNumbers
const tripleNumbers = (triNumbers) => {
  let result = []
  for (let nnn of triNumbers) {
    result.push(nnn * 3)
  }
  return result
}
console.log(tripleNumbers([4, 5, 6,7,8]))

//for in loop -loops over strings and objects
const letterCount = (countLetter) => {
  let result = 0
  for (const letter in countLetter) {
    result = Number(letter) + 1
  }
  return result
}
const phrase = 'Can you please give me a book'

console.log(letterCount(phrase))
console.log(phrase.length)

const numObjects = {
  1: 2,
  2: 40,
  3: 50,
  4: 55,
}

for (const num in numObjects) {
  console.log(numObjects[num] * 2)
}

//while loop - loops over a data if the sfpecified condition is true
const someNumbers = [20, 30, 40, 50]
let aNumber = 0
while (aNumber < someNumbers.length) {
  console.log(someNumbers[aNumber] + 10)
  aNumber++
}

//do while loop - it will be executed once before checking if the condition is true 
const anotherNum = [34, 44, 54, 64]
let qq = 0 
do {
    console.log(anotherNum[qq] * 2)
    qq++

} while (qq < aNumber.length)

let pp = 1
let jj = 5
do {
    console.log(pp)
    pp++
} while (pp <= jj)
 



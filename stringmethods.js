//get method
const todaysDate = new Date()
console.log(todaysDate)
const getMonth = todaysDate.getMonth()

let textA = 'hello class'
console.log(textA.toUpperCase)
console.log(textA.toLowerCase)

textA = 'Apple. Bananna. orange'
console.log(textA.slice(0,5))

//CONVERT NUMBER TO STRING
textA =10
console.log(typeof textA.toString())

let animals = 'Dog, Cat, Goat'
console.log(animals)
let animalsToArray = animals.split()
console.log(animalsToArray)

//trim method
let textB = '      hey all      '
console.log(textB.trim())
console.log(textB.trimStart())
console.log(textB.trimEnd())

//replace method
let textC = 'Please go home and go out'
let newTextC = textC.replace('go','come')
console.log(newTextC)
 
//using concat method
let textD = 'turn off the lights'
let textE = newTextC.concat(', ', textD)
console.log(textE)


let textF = 'I am going home and going out and going'
console.log(textF.indexOf('going'))
console.log(textF.lastIndexOf('going'))


console.log(textF.includes('home'))

//template literials - denoted with ``
let phoneBrand = 'Apple'

let classDate = new Date()
let month = classDate.getMonth() 
let dayOfMonth = classDate.getDay()
let year = classDate.getFullYear()
console.log(`${month + 1}/${dayOfMonth}/${year}`)


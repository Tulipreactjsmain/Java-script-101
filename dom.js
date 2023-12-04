
//it defines the html elements, properties, methods and events. in other words, we can use dom to manipulate elements in our html.

//how to select elements in the dom
//- getElementById method
//this targets a specific element by its id
const helloClass = document.getElementById('hello')
console.log(helloClass)

//getElementsByClassName
//this returns a collection of all elements in the document with the specified name class
const domClass = document.getElementsByClassName('domClass')
console.log(domClass)
domClass[1].innerHTML = 'dom lesson two'

//getElementByTagName
//this accepts a tag and returns all elements of the specified tag name in the order they appear in the document.
let tagClass = document.getElementsByTagName('h6')
console.log(tagClass)
tagClass[0].textContent = 'Microsoft excel'

//with css .querySelector
//this returns the first value that matches the selector it's given. it can be a class, id, or tag
const styleMe = document.querySelector('#css')
styleMe.style.backgroundColor = 'red'
styleMe.style.color = 'white'
styleMe.style.padding = '10px'
styleMe.style.width = '140px'
console.log(styleMe)

const tech = document.querySelectorAll('.tech')
console.log(tech[1])
// tech[1].style.color = 'green'
tech.forEach((b) => (b.style.color = 'green'))

const displayImg = document.getElementById('myImg')
displayImg.src =
  'https://images.unsplash.com/photo-1669940812749-0a0fa4b92ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'

//we can navigate the node tree
const lastChild = document.getElementById('parent').lastElementChild
console.log(lastChild)
const indexNum = document.getElementById('parent').children[2]
console.log(indexNum)
const secondChild = document.getElementById('secondchild')
console.log(secondChild)
console.log(secondChild.nextElementSibling)
console.log(secondChild.previousElementSibling)

//creating elements
const createDiv = document.createElement('div')
console.log(createDiv)
createDiv.innerHTML = '<p>It is noon</p>'

//append element
const parentElement = document.getElementById('parent')
parentElement.appendChild(createDiv)
console.log(parentElement)

//how to insert one element before another
const firstChild = document.getElementById('firstchild')
parentElement.insertBefore(createDiv, firstChild)
console.log(parentElement)

//event listeners are things that happen on an html elements, it cam be the click of a button, input in a text area, and many more.
//Event listeners are js handler functions such that when an event occurs on an element, the handler function is executed.

//event listeners takes 2 params - type of event you want it to listen to, and the function to be excuted on it

//add css class
const buttonElement = document.getElementById('stylebutton')
function addBtn() {
  buttonElement.classList.toggle('btn')
}
function removeBtn() {
  buttonElement.classList.remove('btn')
}
buttonElement.addEventListener('click', addBtn)
 
function change() {
  const changeMyColor = document.getElementById('abcd')
  changeMyColor.style.color = 'red'
}
function changeMee(text) {
  const changeMyColor = document.getElementById('pen')
  changeMyColor.style.color = text
}

document.getElementById('clickme').addEventListener('click', function () {
  alert('Hello world')
})
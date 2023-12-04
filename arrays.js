//arrays are special variables that can hold more than one value

let laptopBrands = ["Hp", "Macbook", "Dell", "Lenovo"];

//this is an ineffecient way of calling multiple items
let lp = "Hp";
let lp2 = "Macbook";
let lp3 = "Dell";
let lp4 = "Lenovo";

//whem we are dealing with large data we simplyy use arrays to hold them
//arrays can be accessed by their index valiue. Arrays are 0 indexed meaning the count starts from 0. You can only start counting from1 when using the lenght method
console.log(laptopBrands);
console.log(laptopBrands[2]); //Targetting the 'Dell' by it's index value

//another way to create an array
const colours = new Array("Black", "Blue", "Red", "Green");
console.log(colours);

//another way
let clubNames = [];
clubNames[0] = "Man city";
clubNames[1] = "Barca";
clubNames[2] = "Liverpool";
console.log(clubNames);

//changing an array element
laptopBrands[3] = "sony";
console.log(laptopBrands);
console.log(laptopBrands.toString()); //converts array to string

//the join method
console.log(laptopBrands.join("/"));

//adding elements to an array - push method to add a new element to the last item in the array
laptopBrands.push("huwaei");
console.log(laptopBrands);

//pop method removes the last item in an array
laptopBrands.pop();
console.log(laptopBrands);

//shift removes the first item from an array
laptopBrands.shift();
console.log(laptopBrands);

const randomArray = [
  "shoe",
  "ticket",
  {
    color: "yellow",
    type: "sunflower",
    date: new Date().getDate(),
    number: 7,
  },
];
console.log(randomArray);

//unshift adds a new item to their starting position in an array

const movieName = {
  title: "The Flash",
  genre: "Action",
  revenue: 3000000,
};
randomArray.unshift(movieName);
console.log(randomArray);

//splice method - add new items to an array in specific position
const places = ["ikeja", "yaba", "ilupeju", "maryland"];
places.splice(2, 0, "onipanu", "Akoka"); //2 represents the starting positing to insert the new value, 0 means don't remove anything after adding new item
console.log(places);
places.splice(4, 0, 'tull');
console.log(places);

//slice method can be used to remove items in an array in specific positions
const swallow = ["eba", "wheat", "fufu", "amala", "semo"];
console.log(swallow);
const slicedSwallow = swallow.slice(0, 3);
console.log(slicedSwallow);

//merging arrays - we can merge two arrays using the concat method or the spread operator
const myMymergedArray = places.concat(swallow);
console.log(myMymergedArray);

//using spread operator
const spreadArray = [...swallow, ...places];
console.log(spreadArray);

//exercise 1 - string methods

//output a string value and check its length
//slice your string variable and extract the third syllable word
//find the index of the fourth syllable
//slice your string variable and extract the third syllable word
//find the index of the fourth syllable

//exercise 2
//create an array consisting of at least 3 objects, each having at least 2 properties.
//add a new object property of a different datatype to the array
//create a new string of multiple items and covert it to an array
//add the converted array of string to your original array at index 0

const stringEx = "NFTs,Crypto,Web2,Web3";
console.log(stringEx);
const slicedStringEx = stringEx.slice(12, 16);
console.log(slicedStringEx);
const index = stringEx.indexOf(slicedStringEx);
console.log(index);



//// excersice 2
const arrayEx =
 [
  { name: "Bolaji", complexion: "Dark" },
  { name: "Charles", complexion: "Dark brown" },
  { name: "Mike", complexion: "Fair" },
];
console.log(arrayEx);
arrayEx.push({ age: 35 });
const itemsString = "apple,banana,orange,kiwi";
const splitter = ",";
const itemsArray = itemsString.split(splitter);
console.log(itemsArray)
const mergedArray2 = itemsArray.concat(arrayEx)
console.log(mergedArray2)
const spreadArray2 = [...itemsArray, ...arrayEx]
console.log(spreadArray2)


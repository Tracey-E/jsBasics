console.log("I am linked");

/**
 * Common JavaScript terms
 * String
 * Number int integer
 * boolean  true / false  truththy or falsy
 *
 *  = change the value
 *  ==  diffrent type but same value
 *  ===  same type and value
 *  !==  not equal
 *
 *   &&   and
 *   ||   or
 *
 *
 * Array , is always shown with  []
 * Objects , is always shown with {}
 * built in methods and functions, will always use ()
 *
 * empty function  function functionName () {}
 * empty for loop for () {}
 * empty if else () {}
 */

/**this comment will be shown when i hover over function names or variable names */
function myFunction() {
  //this is a comment
  // let is a variable  which means going to change
  let myNumber = 10; // type  Number
  console.log(myNumber + 20);
  // const is a variable which will not change
  const name = "myName"; // type  string
  console.log(name + 10);
  //array length     1       2        3          4
  let myArray = ["cake", "choc", "biscuits", "coffee"];
  // array index     0       1        2            3
  //console.log(myArray)
  // if condition  matches  requirements do this
  if (myArray.includes("icecream")) {
    console.log("this is already in your array");
  } else {
    console.log("this is not in your array lets add it ");
    myArray.push("icecream");
    console.log(myArray);
  }

  for (let i = 0; i < myArray.length; i++) {
    console.log("this is i from myArray", i);
    console.log("this is myArray[i]", myArray[i]);
  }
}
let myArray = ["cake", "choc", "biscuits", "coffee"];
//myFunction();
// this adds to end of array and alters the original array
myArray.push("icecream");

// this removes the last item of an array and alters the original array

let myNewArray = myArray.pop();

console.log(myNewArray, "popped");
console.log("original array", myArray);
// to remove first item in array

let firstItem = myArray.shift();
// to add to start array

myArray.unshift("jelly");

console.log("original array", myArray);

console.log(myArray.indexOf("veg"));
console.log(myArray.indexOf("choc"));

if (myArray.indexOf("veg") === -1 || myArray.includes("veg") !== true) {
  myArray.unshift("veg");
}

let myNumberArray = [23, 54, 76, 10, 5, 32, 3, 87];
function checkNumbers() {
  /**   if( myNumberArray.indexOf('8') === -1 ){
    myNumberArray.unshift(8)
  }
 console.log(typeof myNumberArray, myNumberArray)
  if(myNumberArray.includes('87')) {
    myNumberArray.pop()
  }
 console.log(myNumberArray.sort())*/

  let myItemIndex = myNumberArray.indexOf(76);

  console.log(myItemIndex);

  let newArray = myNumberArray.splice(myItemIndex, 1);
  console.log(newArray);

  console.log(myNumberArray);
}
//checkNumbers()

/**  try to use what we have learnt today to build a function that will
   have an array of numbers  
   has Not got the number   8 then add it to the array. 
   if it has got the  number 87 remove it from the array. 

   see if you can find the built in method that will put the 
   array in numerical order 
  
  you can have multiple separate if statements in a function

   we need to call our function to be able to run it
end array should be  myNumberArray = [ 23 , 54, 76, 10, 5, 32, 3, 8] 
                      myNumberArray = [8, 23 , 54, 76, 10, 5, 32, 3] 
                      
    sorted should be   myNumberArray = [ 3,5,8,10,23,32,54,76]          
  */

myArray.map((item) => {
  console.log(item);
  // getting our html element with id of 'result'
  const result = document.getElementById("result");

  console.log(result);
  // creating a new html element/ tag
  const li = document.createElement("li");

  // telling our element what its text content will be
  li.textContent = item;
  // this will change the css style of background color
  li.style.backgroundColor = "red";
  // this will change the css style of text
  li.style.color = "white";
  // adding all to our html document
  result.appendChild(li);
});

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let background = document.getElementById("background");

  if (background.classList.contains("light")) {
    background.classList.remove("light");
    background.classList.add("dark");
  } else if (background.classList.contains("dark")) {
    background.classList.remove("dark");
    background.classList.add("light");
  }
});


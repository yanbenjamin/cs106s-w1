/**
 * File: tutorial.js
 * -------------
 * JavaScript Tutorial for CS 106S Week 1! A rundown of JavaScript
 * syntax, statements, and functions, which can be ran in the 
 * Chrome console. Please feel free to ask me any questions!
 */

// Hello World print command
console.log("Hello World!");

// Math works similarly to Python, the semi-colons here are optional 
1 + 1; // => 2
10 - 4; // => 6
2 * 7; // => 14
3 / 2; // => 1.5

// % is remainder function (i.e. n % k evaluates to remainder of n divided by k)
4 % 2; // => 0
5 % 2; // => 1
6 % 2; // => 0
10 % 26; // => 10

// Variables! use 'let' keyword to declare them
let numClasses = 4; 
numClasses = 5; // can be modified!
numClasses = numClasses - 2; // decreases to 5-2=>3

// += operator is a pretty neat way to add a value to an existing variable.
numClasses += 1; // now back equal to 4!

// can use const for variables with fixed values
const CS106S_UNITS = 1; // 1-unit wonder!
const LITERS_IN_A_GALLON = 3.785;

/* in older JS code, you'll often see 'var' keyword for variables.
as a general principle, avoid using it*/
var totalUnits = 17; 

/* extra: if you're curious on the main difference, while 'let' variables are only 
accessible within the { } block of code they're declared in, 'var' variables are accessible 
in the entire function they're inside -- or globally if outside a function */


// Basic functions -- note the function name summarizes its functionality 
function addTwoNumbers(x,y){
   let sum = x + y;
   return sum; //functions can (optionally) return a single value, of any type
}

//to call function, supply function name & pass in values for each input parameter, e.g.,
let sum1 = addTwoNumbers(3,4); // => 7
let sum2 = addTwoNumbers(-1, Math.PI); //=> 2.1415...

//can compose function calls
let sum3 = addTwoNumbers(addTwoNumbers(1,2), 3) // => addTwoNumbers(3,3) => 6

//example function which converts Celsius to Fahrenheit! 
function celsiusToFahrenheit(celsius){
    return 9/5 * celsius + 32;
}
//celsiusToFahrenheit(0) => 32, celsiusFahrenheit(10) => 50


/** Conditional logic (if, else if, else)
 === for equality, !== for non-equality
 && is logical AND, || is logical OR, ! is logical NOT
 <, <=, >, and >= operate as mathematically expected */

3 === 3 // => true
3 < Math.PI // => true
0.999 === 1 // => false

// example function to showcase if / else if / else logic in JavaScript 
function Goldilocks(fahrenheit){
    if (fahrenheit < 32){
        console.log("It's too cold outside!");
    }
    //checks this only when if condition above fails (i.e. is false)
    else if (fahrenheit > 90){
        console.log("It's too warm outside!");
    }
    //only when both conditions above fail (i.e. are false)
    else{
        console.log("The weather is just right.");
    }
}

// function that returns true if temperature is "just right", false otherwise
function isGoldilocks(fahrenheit){
    return fahrenheit >= 32 && fahrenheit <= 90;
} //note "just right" means fahrenheit is between 32 and 90, inclusive


// Objects in JS are akin to Python dictionaries i.e. key-value pairs enclosed in {}
let numStudents = { // from last time I checked ExploreCourses this winter
    "cs103": 216, 
    "cs106A": 500,
    "cs106B": 439,
    "cs107": 252,
};

// use bracket notation to lookup values (from their keys) 
numStudents["cs106a"] // => 500
numStudents["cs107"] // => 252

// can also set new key-value pairs!
numStudents["cs109"] = 283;
// or modify the value for an existing key
numStudents["cs103"] += 50; // new students! 


/********************************
 * CHECKPOINT #1: Complete the function 'letterToIndex' in assignment.js
 * Tip: make use of the 'mapping' object / dictionary 
 ********************************/


// Arrays! Ordered lists of elements of any data type. Elements are indexed,
// starting at 0 and ending at arr.length - 1
let myCourses = ["cs106b","math52","english9ce"];
myCourses[0] // => "cs106b"
myCourses[1] // => "math52"

//be careful not to write .length()! just .length
myCourses.length // => 3

// arrays are mutable, and of variable length i.e. can add/remove/change elements
myCourses.push("college102"); // ["cs106b","math52","english9ce","college102"];
myCourses[1] = "math53"; // ["cs106b","math53","english9ce","college102"]; 
myCourses.pop(); //removes element at back, so ["cs106b","math53","english9ce"]

//get subarray from index 0 (inclusive) to 2 (exclusive)
myCourses.slice(0,2) // => ["cs106b","math53"]

//can concatenate elements of array into a unified string, using .join() 
let wordFragments = ["all", "is", "well"];
wordFragments.join(" ") // => "all is well"
wordFragments.join(",") // => "all,is,well"


/********************************
 * CHECKPOINT #2: Complete the function 'indexToLetter' in assignment.js
 * Tip: make use of the 'alphabet' array
 ********************************/


/********************************
 * CHECKPOINT #3: Complete the function 'shiftLetter' in assignment.js
 * Tip: make use of the helper functions you've written for previous checkpoints!
 ********************************/


// Strings! ordered collection of characters, enclosed by quotation marks
let film = "wizard of oz";
let home = "Kansas";
let s = "";  

//Characters are indexed, starting from 0 and extending up to str.length - 1, akin to arrays
film[0] // => "w"
film[1] // => "i"
film[6] // => " " (space char)
film[film.length - 1] // => "z" (last char), careful not to write .length()!

//can be concatenated (i.e. combining strings end-to-end) using +
"Dorothly" + " Gale"; // => "Dorothy Gale"
"m" + "o" + "v" + "i" + "e"; // => "movie"

// strings are immutable in JavaScript; can't change string data once created
let name = "percy";
name[0] = "m"; //doesn't work! still "percy"

// so string methods (e.g., +) actually create an entirely new string, then
// re-assign the variable name to that new string object--which is allowed!
name = name + " jackson"; //now "percy jackson"
name += "!!"; //"percy jackson!!", more sass now


// Loops! standard 'for' loops are similar to C++/Java
function sayHelloWorld(numTimes){
     //loop runs N times (i = 0,1,2,...,N-1)
    for (let i = 0; i < N; i++){
        console.log("Hello World!");
    }
}

// loops over all elements in an array, adds them up
function getSum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]; // adds ith element
    }
    return sum;
}

// for an array, we can actually loop directly over its elements 
// (without having to use indices first), using a neat for/of structure
function getSumV2(array){ // alternative to above
    let sum = 0;
    for (let element of array){
        sum += element;
    }
    return sum;
}
     
/* back to strings! as characters in a string are also indexed by integers (0,1,2,
  ..., str.length-1), we can conveniently use for loops to iterate over them! */
function printEachChar(str){
    for (let i = 0; i < str.length; i++){
        console.log(str[i]); // ith character
    }
}

// alternative, uses for/of loop over the string's characters directly
function printEachCharV2(str){
    for (let char of str){
        console.log(char);
    }
}

/* tip: for most string tasks in JavaScript, we have an existing string 
whose characters we usually loop over, and a new string variable that 
we build up from scratch (which we typically return at the end). 

as an example, here's a function (twins) which takes an input string and 
returns a copy of that string with each character repeated once.
e.g., "abc"→"aabbcc", minnesota"→"mmiinnnneessoottaa". */

function twins(input){
    let output = ""; //string to build up
    for (let char of input){
        output += char + char; //repeats each char
    }
    return output; // returns new string with repeated characters
}

let dancingQueen = twins("abba") // => "aabbbbaa"


/********************************
 * FINAL CHECKPOINT: Complete the function 'encryptCaesar' in assignment.js,
 * then check to make sure all Caesar tests pass in the console. 

 * Tip: Use a loop over the input string! (see example above)
 * And make use of the helper functions you've just written.
 *********************************/


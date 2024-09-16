/**
 * File: tut.js
 * -------------
 * JavaScript Tutorial for CS 106S Week 1. A rundown of basic JS 
 * statements and functions, which can be ran in the Chrome console. 
 * Feel free to ask any questions!
 */

// Hello World print command
console.log("Hello World!");

// Math works similarly to Python; the semi-colons here are optional 
1 + 1; // => 2
10 - 4; // => 6
2 * 7; // => 14
3 / 2; // => 1.5

// mod: remainder function
4 % 2; // => 0
5 % 2; // => 1
6 % 2; // => 0
10 % 26; // => 10

// Variables! use 'let' keyword to declare them
let num_classes = 4; 
num_classes += 1; // can be modified 
num_classes = num_classes - 2;

const CS106S_UNITS = 1; //constant i.e. can't be changed

/* in older JS code, you'll often see 'var' keyword for variables.
as a general principle, AVOID USING IT.*/
var total_units = 17; 

/* extra: if you're curious on the main difference, while 'let' variables are only 
accessible within the indented block they're declared in, 'var' variables are accessible 
in the entire function they're inside -- or globally if outside a function */


// Basic functions -- note the function name relates to its functionality 
function add(x,y) {
    let answer = x+y;
    return answer; // Just like Python!
}
//to call function, add(5,3) => 8
//can compose function calls, add(add(1,2), 3) => 6

function isEven(n){
    return n % 2 == 0; //checks remainder (%) after dividing by 2
}
//isEven(1) >= false, isEven(4) => true, isEven(100001) => false


/** Conditional logic (if, else if, else)
 === for equality, !== for non-equality, && is logical AND, || is logical OR
 <, <=, >, and >= operate as mathematically expected
 */
function getMax(x,y,z){
    if (x >= y && x >= z){
        return x;
    }
    //either y or z is max
    else if (y >= z){
        return y;
    }
    else{
        return z;
    }
}

// JS Objects are akin to Python dictionaries i.e. key-value pairs enclosed in {}
let menuPrices = {
    "hotdog": 5, 
    "soda": 3, 
    "pretzel": 4.50,
    "funnelcake": 9,
} //entries can also be of different type!

//use bracket notation to get values 
menuPrices["hotdog"]; // => 5
menuPrices["pretzel"]; // => 4.50
let comboPrice = menuPrices["hotdog"] + menuPrices["soda"]; // 8

/********************************
 * CHECKPOINT #1: Complete the function 'letterToIndex' in assignment.js
 * Tip: make use of the 'mapping' object / dictionary 
 ********************************/

// Arrays! Ordered lists of any / heterogeneous data type
let myArray = ["sorcery", -5, true];
myArray[0]; // => "sorcery"
myArray[1]; // => -5

// arrays are mutable and of variable length
myArray.push("earth"); // ["sorcery", -5, true, "earth"]
myArray.length; // => 4
myArray[2] = "water"; // ["sorcery", -5, "water", "earth"]

//get subarray from index 1 (inclusive) to 3 (exclusive)
myArray.slice(1,3) // => [-5, "water"]

//concatenating elements of array using .join() 
let wordFragments = ["my","hero","academia"];
wordFragments.join(""); // => "myheroacademia" (string)
wordFragments.join(","); // => "my,hero,academia" (string)

/********************************
 * CHECKPOINT #2: Complete the function 'indexToLetter' in assignment.js
 * Tip: make use of the 'alphabet' array
 ********************************/

/********************************
 * CHECKPOINT #3: Complete the function 'shiftLetter' in assignment.js
 * Tip: make use of the helper functions you've written for previous checkpoints!
 ********************************/

// Strings! can be concatenated using +, indexing similar to arrays
"your " + "name"; // => "your name"
"m" + "o" + "v" + "i" + "e" // => "movie"

let myString = "syzygy"; //yes, this is an English word
myString[1]; // => y
myString[2]; // => z
//'length' is a property of string; be careful not to write .length()
myString.length; // => 6

//strings are immutable, cannot change object once declared 
myString[0] = "a"; // "syzygy", does nothing! 

// so string methods (e.g., +) actually create an entirely new string, then
// reassign the variable name to that new string object
myString += "!"; // "syzygy!", new string! 
myString = myString + "!" // "syzygy!!"


// Loops! standard 'for' loops are similar to C++/Java
function sayHelloThereNTimes(N){
    //loop runs N times (i = 0,1,2,...,N-1)
    for (let i = 0; i < N; i++){ 
        console.log("Hello There!");
    }
}

// looping & printing out each letter in a string
function printAllLetters(str){
    for (let i = 0; i < str.length; i++){
        let letter = str[i]; //get ith letter of string
        console.log(letter);
    }
}

// extra: for/of loops enable direct iteration over elements of array
function printAllElements(array){
    for (let element of array){
        console.log(element);
    }
} 

//conversely, 'for/in' loops iterate over keys/indices, not elements!
function printAllElementsV2(array){
    for (let index in array){ // be careful to differentiate with the above!
        console.log(array[index]);
    }
} 

/********************************
 * FINAL CHECKPOINT: Complete the function 'encryptCaesar' in assignment.js,
 * then check to make sure all Caesar tests pass in the console. 
 * Tip: Use a loop! And make use of the helper functions you've just written.
 *********************************/

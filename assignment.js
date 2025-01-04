/**
 * File: assignment.js
 * -------------
 * Objective is getting familiar with JavaScript and implementing 
 * a Caesar encryption scheme. TODOs are functions letterToIndex(),
 * indextoLetter(), shiftLetter(), and encryptCaesar() below. Refresh
 * Chrome tab on index.html & check console to see whether the tests pass or not!
 */

console.log("Hello World! I'm printing functionality tests for assignment.js!");

// map from letter to corresponding index 
let mapping = {
    "a": 0,  "b": 1,  "c": 2,  "d": 3,  "e": 4,
    "f": 5,  "g": 6,  "h": 7,  "i": 8,  "j": 9,
    "k": 10, "l": 11, "m": 12, "n": 13, "o": 14,
    "p": 15, "q": 16, "r": 17, "s": 18, "t": 19,
    "u": 20, "v": 21, "w": 22, "x": 23, "y": 24,
    "z": 25
  }

// array with alphabet => ["a", "b", "c", ..., "z"]
// Q: what is alphabet[14]? => "o"
let alphabet = Object.keys(mapping);

/**
 * Function: letterToIndex
 * Takes a lowercase letter (a-z) and returns its index in the alphabet (a=0,b=1,etc.)
 * -------------
 * Params: 
 *  > letter (string) - letter you'd like to get the index of 
 * 
 * Returns: 
 *  > (int) the corresponding index 
 */
function letterToIndex(letter){
    // TODO: complete this function
}


/**
 * Function: indexToLetter
 * Takes index of a letter and returns the letter itself. Number >25 wrap around!
 * e.g., 0 => a, 1 => b, 25 => z, 26 => a, etc.
 * -------------
 * Params: 
 *  > index (int) - non-negative index of the letter you'd like to retrieve
 * 
 * Returns: 
 *  > (string) the letter
 */
function indexToLetter(index){
    // TODO: complete this function
}


/**
 * Function: shiftLetter
 * shifts the given letter by a given shift
 * -------------
 * Params: 
 *  > original (string) - letter you'd like to shift
 *  > shift (int) - number of places to move that letter down the alphabet
 * 
 * Returns: 
 *  > (string) the shifted letter
 */
function shiftLetter(original, shift){
    // TODO: complete this function
}


/**
 * Function: encrpytCaesar
 * Encrpyts the given string using the Caesar cipher with the given shift length.
 * -------------
 * Params: 
 *  > original (string) - the string you'd like to encrpyt, of any length
 *  > shift (int) - number of places to move each letter down the alphabet
 * 
 * Returns: 
 *  > (string) the encrpyted string
 */
function encryptCaesar(original, shift){
    // TODO: complete this function
}


/** OPTIONAL EXTENSION
 * Function: encrpytVigenere
 * Encrypts the given string using the Vigenere cipher and the given keyword.
 * -------------
 * Params: 
 *  > original (string) - the string you'd like to encrpyt, of any length
 *  > keyword (string) - given keyword
 * 
 * Returns: 
 *  > (string) the encrpyted string
 */
function encryptVigenere(original, keyword){
    // optional TODO: complete this function
}


/** OPTIONAL EXTENSION
 * Function: breakCaesar
 * 
 * Decodes an encrypted message by logging out all possibilities. Specifically, 
 * loops over all possible Caesar shifts from +0 to +25, inclusive, and prints out
 * what the decrypted string would be for each shift, making calls to the
 * decryptCaesar(ciphertext, shift) function already written below. 
 * 
 * The print formatting is up to you; and to print, use console.log() in JavaScript! 
 * -------------
 * Params: 
 *  > ciphertext (string) - the string you'd like to decode, of any length
 * 
 * Returns: 
 *  > None
 */
function breakCaesar(original, keyword){
    // optional TODO: complete this function
}


/* No need to modify anything beyond this point :) */

/** 
 * Function: decryptCaesar
 * Decrypts the given string from Caesar cipher with a given shift length. Note
 * this reverses encryptCaesar by negating the encryption shift, and adding
 * 26 (wraps fully around alphabet) to get an equivalent positive-valued shift. 
 */
function decryptCaesar(ciphertext, shift){
    let reverse_shift = -shift + 26;
    return encryptCaesar(ciphertext,reverse_shift); 
}

/** 
 * Function: decryptCaesar
 * Decrypts the given string from Vigenere cipher of given keyword. 
 */
function decryptVigenere(ciphertext, keyword){
    //gets the reversed keyword (e.g., abc => zyx)
    let reverse_keyword = "";
    for (let i = 0; i < keyword.length; i++){
        reverse_keyword += indexToLetter(-letterToIndex(keyword[i]) + 26);
    }
    //use a keyword with reverse shifts to recover the original string i.e. go backward
    return encryptVigenere(ciphertext, reverse_keyword);
}

/** 
 * Function: runUnitTest
 * tests a function (func), given an array of ordered input parameters (args),
 * and the expected function output. returns 0 if success, -1 otherwise
 */
function runUnitTest(func, args, expected_output){
    let output = func.apply(null, args);
    if (expected_output == output){
        console.log(func.name + "(" + args + ") => " + output + ". PASSED!");
        return 0;
    }
    console.log(func.name + "(" + args + ") => " + output + ". Expected Output: " + expected_output); 
    return -1; 
}

/** 
 * Function: testCaesar
 * Sanity-testing each of the key functions written above
 */
function testCaesar(){
    let num_passed_tests = 0;
    const total_tests = 10; //make sure to edit this if you add new tests!
    const SUCCESS_FLAG = 0; 

    //tests letterToIndex
    if (runUnitTest(letterToIndex, ["a"], 0) == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(letterToIndex, ["t"], 19) == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(letterToIndex, ["z"], 25) == SUCCESS_FLAG){num_passed_tests += 1};

    //tests indexToLetter
    if (runUnitTest(indexToLetter, [0], "a") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(indexToLetter, [10], "k") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(indexToLetter, [28], "c") == SUCCESS_FLAG){num_passed_tests += 1};

    //tests shiftLetter 
    if (runUnitTest(shiftLetter, ["a",0], "a") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(shiftLetter, ["y",3], "b") == SUCCESS_FLAG){num_passed_tests += 1};

    //tests encryptCaesar
    if (runUnitTest(encryptCaesar, ["abc",1], "bcd") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(encryptCaesar, ["zyzzyva",3], "cbccbyd") == SUCCESS_FLAG){num_passed_tests += 1};

    if (num_passed_tests == total_tests){
        console.log("All " + total_tests + " Caesar tests passed, congrats!");}
    else{
        console.log(num_passed_tests + "/" + total_tests + " Caesar tests passed; you've got this!");}
}

/** 
 * Function: testVigenere
 * Tests the encryptVigenere function above
 */
function testVigenere(){
    let num_passed_tests = 0;
    const total_tests = 4;
    const SUCCESS_FLAG = 0; 

    if (runUnitTest(encryptVigenere, ["abc","a"], "abc") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(encryptVigenere, ["abc","b"], "bcd") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(encryptVigenere, ["abcd","ac"], "adcf") == SUCCESS_FLAG){num_passed_tests += 1};
    if (runUnitTest(encryptVigenere, ["zyzzyva","bc"], "aaabzxb") == SUCCESS_FLAG){num_passed_tests += 1};

    if (num_passed_tests == total_tests){
        console.log("All " + total_tests + " Vigenere tests passed, congrats!");}
    else{
        console.log(num_passed_tests + "/" + total_tests + " Vigenere tests passed; you've got this!");}
}

testCaesar();
// testVigenere(); // -- uncomment to test Vigenere cipher (optional)

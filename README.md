# CS 106S Week 1: JavaScript and Ciphers!

## Instructions
1. Make sure to have Google Chrome (preferably) or Safari installed.
2. Download the starter code and unzip it.
3. Inspect the folder / files in Visual Studio Code or your preferred code editor, especially `tut.js` and `assignment.js`.
4. Using Finder or your OS equivalent, open `index.html` in Chrome (double-clicking the file name should work). Then, type `cmd`-`option`-`j`, or `ctrl`-`shift`-`j` if on Windows, to open the JavaScript console!
5. Go through `tut.js` (which we'll walkthrough in class), and feel free to copy and run any code in the Console to verify its output.
6. Whenever you see a checkpoint in `tut.js`, shift over to `assignment.js` and complete the requisite `TODO`. More of this part below!

## Intro Cryptography
This workshop will introduce you with the basics of crytographic ciphers, which are widely used for keeping data secure and veiling sensitive information, such as passwords, identifying information, personal communications, digital signatures, and much more! 

## Caesar Ciphers (`assignment.js`)
Caesar ciphers work by shifting each character in a certain message we'd like to encrypt, which we call the "plaintext". The mechanism is that each character is shifted by the same number of characters; for instance, if our shift length is `1`, then `a` shifts to `b`, `b` shifts to `c`, `c` to `d`, and so forth, with `z` to `a` so that letters at the alphabet's end wrap around back to the beginning.

The diagram below illustrates encrypting message `"roman"` with a shift length of 2, where `r` (alphabet index `17`) shifts to `t` (`19`), `o` (`14`) shifts to `q` (`16`), and so on, ensuring that `"roman"` becomes `"tqocp"`, the ciphertext.

**For this endeavor, you can make the following assumptions:** (1) all text / strings will be of non-zero length, (2) all given alphabetic characters wil be lowercase, and (3) the cipher is not applied to non-alphabetic characters, and you will not encounter them. 

**To help check functionality**, after completing `TODO` functions, refresh the Chrome tab on `index.html` and check the Console to see if our sanity-check tests pass or not. Please let me know if you have any questions!

## Optional Extension: Vigenère Ciphers (also `assignment.js`)
Completely optional: we won't cover it in class time, but feel free to work on it if you'd like!

## Credit
This workshop was built and rechiseled from previous iterations of the course: particular thanks to Miles McCain, and to Stanford Python for providing its inspiration!

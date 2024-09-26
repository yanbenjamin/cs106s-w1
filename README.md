# CS 106S Week 1: JavaScript and Ciphers!

## Instructions
1. Make sure to have Google Chrome (preferably) or Safari installed.
2. Download the starter code and unzip it.
3. Inspect the folder / files in Visual Studio Code or your preferred code editor, especially `tut.js` and `assignment.js`.
4. Using Finder or your OS equivalent, open `index.html` in Chrome (double-clicking the file name should work). Then, type `cmd`-`option`-`j`, or `ctrl`-`shift`-`j` if on Windows, to open the JavaScript console!
5. Go through JavaScript tutorial `tut.js` (which we'll walkthrough in class), and feel free to copy and run any code in the Console to verify its output.
6. Whenever you see a checkpoint in `tut.js`, shift over to `assignment.js` and complete the requisite `TODO`. More of this part below!

## Intro Cryptography
This workshop will introduce you with the basics of crytographic ciphers, which are widely used for keeping data secure and veiling sensitive information, such as passwords, identifying information, personal communications, digital signatures, and much more! 

## Caesar Ciphers (`assignment.js`)
Caesar ciphers work by shifting each character in a certain message we'd like to encrypt, which we call the "plaintext". The mechanism is that each character is shifted by the same number of characters; for instance, if our shift length is `1`, then `a` shifts to `b`, `b` shifts to `c`, `c` to `d`, and so forth, with `z` to `a` so that letters at the alphabet's end wrap around back to the beginning.

The diagram below illustrates encrypting message `"roman"` with a shift length of 2, where `r` (alphabet index `17`) shifts to `t` (`19`), `o` (`14`) shifts to `q` (`16`), and so on, ensuring that `"roman"` becomes `"tqocp"`, the ciphertext.

<img src="caesar_cipher_diagram.png" alt="Diagram of Caesar encryption" width="600"/>

**For this endeavor, you can make the following assumptions:** (1) all text / strings will be of non-zero length, (2) all given alphabetic characters wil be lowercase, and (3) the cipher is not applied to non-alphabetic characters, and you will not encounter them. 

**To help check functionality**, after completing `TODO` functions, refresh the Chrome tab on `index.html` and check the Console to see if our sanity-check tests pass or not. Please let me know if you have any questions!

## Optional Extension: Vigenère Ciphers (also `assignment.js`)
**Completely optional:** we won't cover it in class time, but feel free to work on it if you'd like! The mechanism behind Vigenère ciphers is to use alternating shift lengths for each plaintext letter. The **shifts are dictated by a fixed keyword** of some length, and specifically the alphabetic indices (e.g., `a=+0`,`b=+1`,...,`z=+25`) corresponding to each keyword letter. 

In precise terms, for a plaintext string, the letter at index `i` will get shifted by the alphabet index of `keyword[i % keyword.length])`, where `%` is the remainder function (you can think of `modulo` if you're familiar with clock/modular arithmetic).

An example encryption is illustrated below, with keyword `fgh` (that is, alternating shifts of `+5,+6,+7`), meaning that letters at indices `0`,`3`,`6`, etc. will get shifted by `+5`; letters at indices `1`,`4`,`7`,etc. will get shifted by `+6`; and finally, letters at indices `2`,`5`,`8`,etc. will get shifted by `+7`. Here, we are encrypting the text `world`. We observe that `w` (`22`) at string index 0 becomes `b` (`27`,+5), `o` (`14`) at string index 1 becomes `u` (`20`, +6), and so on. 

<img src="vigenere_cipher_diagram.png" alt="Diagram of Vigenere encryption" width="600"/>

## Credit
This workshop was built and rechiseled from previous iterations of the course: particular thanks to Miles McCain, and to Stanford Python for providing its inspiration!

/*  * Exercise 05
 * replace '-' with '/' in a date.
 * Example: const someDate = '20-05-2017' should become '20/05/2017'
 *  */

let  someDate = '13-05-2020';
let replaceDate = someDate.replaceAll('-','/')
console.log(replaceDate);


/**
 * Exercise 06
 * Print the first word in a string. 
 * The first word are all characters up to the first space.
 * Example: const someString = 'see and stop' should print 'see'
 */

let someWord = 'see and stop';
let firstWord = someWord.split(' ')[0];
console.log(firstWord);

/* /**
 * Exercise 07
 * Given two strings, print 
 * first occurrence of the second string in the first string. 
 * Example: 
 * string1 = 'bit'
 * string2 = 'it'
 * should print 1
 */ 

let string1 = 'bit';
let string2 = 'it';
let indexOfSubString = string1.indexOf(string2);
console.log(indexOfSubString);

/* 
/**
 * Exercise 08
 * Print the first character that is not a space in a string.
 * 
 * Example: const someString = ' Rosa Parks ' should print 'R'.
 */ 

let someString = '       Rosa Parks     ';
someString = (someString.trim())
const firstWordOfString = someString.charAt(0);
console.log(firstWordOfString);

/* /**
 * Exercise 09
 * Given a string, print it in lowercase and uppercase 
 * with "-" as delimiter.
 * Example: const someString = 'Mthatha' should print 'mthatha-MTHATHA'
 */ 

let someString1 = 'Mthatha';
let someUpperString =someString1.toLocaleUpperCase();
console.log(`${someString1}-${someUpperString}`)


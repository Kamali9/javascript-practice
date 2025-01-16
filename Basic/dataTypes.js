//Date: Jan 15 2025

//Data Types
//Data types in JavaScript define the data type that a variable can store. 
//JavaScript includes primitive and non-primitive data types(Reference Types). 

/* 1. Primitive Data Types
  string, number, boolean, undefined, null, symbol and BigInt.

    2. Non-Primitive Data Types
    Object, Array, Function,
    Date, RegExp, set, map
*/


let fName = "Kamali";
console.log(fName, 'fName'); // 'Kamali'
console.log(typeof fName);  //string


let intNumber = 123;
console.log(intNumber, 'intNumber'); // 123
console.log(typeof intNumber);  //number


let floatNumber = 3.14;
console.log(floatNumber, 'floatNumber'); // 3.14
console.log(typeof floatNumber);  //number


let a = 10;
let b = 9;
console.log(a==b, 'a==b'); //false
console.log(typeof a==b);  //boolean


let unknown;
console.log(unknown, 'unknown'); //undefined
console.log(typeof unknown);  //undefined


function greet() {
    return; // No explicit return value
}
console.log(greet()); // undefined

let user= null;
console.log(user, 'user'); // null
console.log(typeof user); // object
console.log(user === null); // true



//Symbol
/* The symbol data type in JavaScript defines a property of an object which is private to the object. 
The value with the Symbol data type can be referred to as a symbol value. The symbol refers to the ‘key’ of the key-value pair of an object. Every symbol is unique. 
Two symbols with the same key values are not the same. */

let symbol1 = Symbol("value");
let symbol2 = Symbol("value");
console.log(symbol1 == symbol2); // false



let bigInt = 1234567890987654321;
console.log(bigInt, 'bigInt'); //1234567890987654321

let obj = { name: "Vikatakavi", age: 25 };
console.log(obj, typeof obj, "obj");

let arr = [1, 2, 3, "Hello"];
console.log(arr, typeof arr, "arr"); //object
console.log(Array.isArray(arr)); //true


function greet() {
    return `Hello!`;
}
greet();
console.log(greet()); // Hello!
console.log(typeof greet()); //string
console.log(typeof greet); // function




let currentDate = new Date(); 
console.log(currentDate); // Output: Wed Jan 15 2025 19:47:57 GMT+0530 (India Standard Time) {}



let specificDate = new Date("2023-07-04");
console.log(specificDate); // Output: Tue Jul 04 2023 05:30:00 GMT+0530 (India Standard Time) {}





//RegExp

/* A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations. */



// Define a RegExp for email validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



// Function to validate an email address
function validateEmail(email) {
  return emailPattern.test(email); // Returns true if the email matches the pattern
}



// Test cases
const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(`${email1} is valid:`, validateEmail(email1)); // Output: test@example.com is valid: true
console.log(`${email2} is valid:`, validateEmail(email2)); // Output: invalid-email


//It is used in search, forms, token validation, url pattern etc.,









//Date:16/Jan/25

//Hositing

/*Hoisting is JavaScript's default behavior of moving declarations to the top of their scope (script or block). 
  However, only declarations are hoisted, not initializations. */

  // var:
  // Variables declared with var are hoisted to the top of their scope.
  // You can use a var variable before its declaration, but its value will be undefined until the line where it is initialized.

  // Example:
    console.log(values); // undefined
    var values= 10; 
    console.log(values); // 10

  //let and const:

  /* Variables declared with let and const are also hoisted, but they are in a temporal dead zone (TDZ) from the start of the block until the declaration is encountered.
  You cannot use let or const variables before their declaration. */

  // Example:
  //console.log(nums); // ReferenceError: Cannot access 'nums' before initialization
  let nums = 20; 
  console.log(nums); // 20

  //For const, you must initialize the variable at the time of declaration, as it cannot remain uninitialized.

//  <b>Kamali, Note this</b> 

  /* var declarations are hoisted and initialized to undefined.
  let and const declarations are hoisted but remain uninitialized until the declaration is encountered, leading to a ReferenceError if accessed before initialization. */


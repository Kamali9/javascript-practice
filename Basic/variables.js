//Date: Jan 15 2025

// VARIABLES

/*
 * Variables are containers for storing data values.
 * In JavaScript, we use `var`, `let`, and `const` to declare variables.
 */

//var: Used before ES6, it is function-scoped or globally-scoped.
//let and const: Introduced in ES6 (2015), both are block-scoped

// VARIABLES: var

/*
The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped. This means:
If you create a variable outside of a function, you can use it anywhere in your code.
If you create a variable inside a function, you can only use it within that function.
var is not a block scope (e.g., within an `if` or `for` block). you can use anywhere in the code.
*/


//ex1: Declaring a variable with `var`
var id = 169; //  globally-scoped variable
console.log(id, 'id'); // Output: 169 'id'


//redeclaring a variable with 'var'
var id = 171;
console.log(id, 'id'); // Output: 171 'id'

// ex2: `var` ignores block scope
if(true){
    var city = "Tirupati";
}
console.log(city, 'city'); // Output: Tirupati 'city' (Accessible outside the block)
//Since `var` is not block-scoped, the `city` variable is accessible outside the `if` block.

// ex3: `var` in function scope
var num = 10; // Global variable
function exampleVarScope() {
    var localNum = 20; // Function-scoped variable
    console.log(num, localNum); // Output: 10 20
}
exampleVarScope();
console.log(num); // Output: 10
// console.log(localNum); // Error: `localNum` is not defined (because `localNum` is scoped to the function `exampleVarScope`)



// VARIABLES: let

//The variable is only available inside the block {} where you define it.
/*
  `let` is used to declare variables in JavaScript.
  - Block-scoped: The variable is only accessible within the block `{}` where it is defined.
  - Cannot be redeclared in the same scope but can be reassigned.
  - - Hoisted but not initialized (access before declaration causes an error).
 */

let fName = "Kamali"; //Globally scoped variable
console.log(fName, "fName");


//ex1:Block scope with `let`
function exampleLetScope() {
    let blockScoped = 9;
    console.log(blockScoped); // Output: 9
}
exampleLetScope();
// console.log(blockScoped); // Error: `blockScoped` is not defined (block-scoped)


//ex2: Block scope with `let`
function fWithBlockScope() {
    if (true) {
        let b = 9 // Block-scoped variable
        console.log(b); 
    }

    // console.log(b); // Error: `b` is not defined (block-scoped)
}
fWithBlockScope();

//ex3:Redeclaring and reassigning with `let`

//Variables declared with `let` cannot be redeclared in the same scope but can be reassigned.

let count = 10; // Declaration

// Redeclaring in the same scope is not allowed
// let count = 20; // Error: Identifier 'c' has already been declared


// Reassigning is allowed
count = 20; // Reassignment allowed
console.log(count); // Output: 20


//ex4: Hoisting with `let`
/*
 Variables declared with `let` are hoisted to the top of their scope but remain uninitialized.
 Accessing the variable before declaration results in a ReferenceError.
 */
// console.log(age); // Error: Cannot access 'd' before initialization
let age = 30;
console.log(age); // Output: 30

//Unlike `var`, which initializes to `undefined` during hoisting, `let` does not initialize.
 

// VARIABLES: const
//`const` is used to declare variables whose values cannot be reassigned. 
/*
  - Block-scoped: The variable is only accessible within the block `{}` where it is defined.
  - Cannot be reassigned after its initial value is set.
  - However, properties of objects or elements of arrays declared with `const` can still be modified.
 */

  //ex1: Declaring a `const` variable
const lName = "Ethiraj";
console.log(lName, "lName");



//ex2:Attempting to reassign a `const` variable
const value = 10; 
// value = 9; // Error: Assignment to constant variable


//ex3:Using `const` with objects
const obj = {
    prop1: 10,
    prop2: 9
}

// Modifying object properties is allowed
obj.prop1 = 3
console.log(obj.prop1); // Output: 3

// Reassigning the entire object is not allowed
// obj = { b: 10, prop2: 9 }; // Error: Assignment to constant variable



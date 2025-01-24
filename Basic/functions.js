//Date:Jan 16/2025
//Functions: A function is a reusable block of code that performs a specific task. Functions help in organizing code, reducing repetition, and making programs modular.



// Declaring Functions
// There are multiple ways to define functions in JavaScript:




//1. Function Declaration: A function is declared using the function keyword.

// function functionName(parameters) {
//     // Function body
// }
  

function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice")); // Output: Hello, Alice!
  




//2. Function Expression: A function can be assigned to a variable.

//   const functionName = function(parameters) {
//     // Function body
//   };

const add = function(a, b) {
    return a + b;
  };
  console.log(add(5, 3)); // Output: 8






  
//3. Arrow Function: Introduced in ES6, arrow functions provide a concise syntax.

// const functionName = (parameters) => {
//     // Function body
// };

const multiply = (a, b) => a * b; // Implicit return
console.log(multiply(4, 5)); // Output: 20








//4. Anonymous Function: A function without a name is called an anonymous function. It is often used in event handlers or as arguments to other functions.
setTimeout(function() {
    console.log("This runs after 2 seconds!");
  }, 2000);







//5. Immediately Invoked Function Expression (IIFE): An IIFE is executed immediately after it is defined.
  
// (function() {
//     // Code
//   })();

(function() {
    console.log("This runs immediately!");
  })();
  // Output: This runs immediately!




//6. Default Parameters: You can provide default values for function parameters.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet());       // Output: Hello, Guest!
  console.log(greet("Alice")); // Output: Hello, Alice!



//7. Rest Parameters: Use rest parameters to handle a variable number of arguments.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10


//8. Function with Return Statement: A function can return a value using the return statement.
function square(num) {
    return num * num;
  }
  console.log(square(5)); // Output: 25
  




//9. Callback Functions: A function can be passed as an argument to another function.  
function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  const addition = (x, y) => x + y;
  const multiplication = (x, y) => x * y;
  
  console.log(calculate(3, 4, addition));       // Output: 7
  console.log(calculate(3, 4, multiplication)); // Output: 12
  




//10. Higher-Order Functions: Functions that operate on other functions, either by taking them as arguments or returning them, are called higher-order functions.
function higherOrder(fn) {
    console.log("Executing the callback:");
    fn();
  }
  
  higherOrder(() => console.log("Callback executed!"));
  // Output:
  // Executing the callback:
  // Callback executed!
  



//11. Recursive Functions: A function that calls itself is called a recursive function.
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120

  


//12. Function Scope: Functions create their own scope, meaning variables declared inside are not accessible outside.

function testScope() {
    let localVar = "I'm local!";
    console.log(localVar);
  }
  testScope(); // Output: I'm local!
  // console.log(localVar); // Error: localVar is not defined
  




//13. Closures: A closure occurs when a function "remembers" variables from its parent scope, even after the parent function has finished executing.
function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(`Count: ${count}`);
    };
  }
  const counter = outer();
  counter(); // Output: Count: 1
  counter(); // Output: Count: 2
  


//14. Pure Functions: A pure function always produces the same output for the same input and does not cause side effects.
function pureAdd(a, b) {
    return a + b;
  }
  console.log(pureAdd(2, 3)); // Output: 5
  
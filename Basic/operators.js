
//Date: 16/01/2025
{/* <b>JavaScript Operators</b> */}

//Operators in JavaScript are symbols or keywords used to perform operations on values (operands).

  
    // 1. Arithmetic Operators: These operators perform mathematical operations.
        console.log(5 + 3); // 8
        console.log(5 % 2); // 1
        console.log(10 / 2); //5 
        console.log(2 ** 3); // 8
        console.log(5 - 3); // 2
        console.log(5 * 3); // 15




    // 2. Assignment Operators: These assign values to variables.
        let x = 10;
        x += 5; // x = 15
        x *= 2; // x = 30
        console.log(x); // 30


    // 3. Comparison Operators: These compare two values and return a boolean.
        console.log(5 == '5'); // true
        console.log(5 === '5'); // false
        console.log(7 > 3); // true
        console.log(7 < 3); // false



    //  4. Logical Operators: These are used to combine conditions.
        console.log(true && false); // false
        console.log(true || false); // true
        console.log(!true); // false


    // 5. Bitwise Operators: These perform bit-level operations.
        console.log(5 & 1); // 1
        console.log(5 | 1); // 5
        console.log(5 ^ 1); // 4


   // 6. String Operators
        let greeting = "Hello";
        greeting += " World!";
        console.log(greeting); // "Hello World!"


   // 7. Conditional (Ternary) Operator: A shorthand for if-else.
        let voterAge = 20;
        let canVote = voterAge >= 18 ? "Yes" : "No";
        console.log(canVote); // "Yes"
    

   // 8. Type Operators
        console.log(typeof "Hello"); // "string"
        console.log([] instanceof Array); // true


    // 9. Nullish Coalescing Operator (??) : Returns the right operand if the left is null or undefined.
        let dName = null;
        console.log(dName ?? "Default Name"); // "Default Name"

    
    // 10. Optional Chaining Operator (?.) : Safely access properties of an object.
        let userDetails = { name: "John" };
        console.log(userDetails?.name); // John
        console.log(userDetails?.address?.street); // undefined



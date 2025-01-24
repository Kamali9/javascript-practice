//Date:16/01/2024

//Loops
//Loops are used to repeatedly execute a block of code as long as a specific condition is true.





//1. For Loop: The for loop repeats a block of code for a specified number of times.

    // for (initialization; condition; increment/decrement) {
    //     // Code to execute
    //   }


    for (let i = 1; i <= 5; i++) {
        console.log(`Number: ${i}`);
    }
//Output: Number: 1
//Output: Number: 2
//Output: Number: 3
//Output: Number: 4
//Output: Number: 5
  





//2. While Loop: The while loop executes as long as the condition is true.

    // while (condition) {
    //     // Code to execute
    // }
  


    let j = 1;
    while (j <= 5) {
    console.log(`Count: ${j}`);
    j++;
    }
    // Output: 1, 2, 3, 4, 5






//3. Do-While Loop: The do-while loop executes the block of code at least once, then checks the condition.
    // do {
    //     // Code to execute
    // } while (condition);
  

    let k = 1;
    do {
    console.log(`Number: ${k}`);
    k++;
    } while (k <= 5);
    // Output: 1, 2, 3, 4, 5

    let m = 5;
    do {
    console.log(`Number: ${m}`);
    m++;
    } while (m <= 0);
    // Output: 5




//4. For-In Loop: The for-in loop iterates over the keys of an object.
// for (key in object) {
//     // Code to execute
//   }

const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: New York




//5. For-Of Loop: The for-of loop iterates over iterable objects like arrays, strings, or sets.
// for (element of iterable) {
//     // Code to execute
//   }

const fruitBasket = ["Apple", "Banana", "Cherry"];
for (let fruit of fruitBasket) {
  console.log(fruit);
}
// Output: Apple, Banana, Cherry

const text = "Hello";
for (let char of text) {
  console.log(char);
}
// Output:
//  H
//  e
//  l
//  l
//  o

  
  

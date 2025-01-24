//Date: 17/01/2025

//An array is a special variable, which can hold more than one value.

//Ways to create an array

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars, 'cars');



//we can create an array, and then provide an elements
const vehicles = [];
vehicles[0]= "Saab";
vehicles[1]= "Volvo";
vehicles[2]= "BMW";
console.log(vehicles, 'vehicles');


const MotorVehicle = new Array("Saab", "Volvo", "BMW");
console.log(MotorVehicle, 'MotorVehicle');


//Array Methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fLength = fruits.length;
console.log(fLength, 'fLength');




//Array elements are accessed using their index number
console.log(fruits[0], 'first array element');

//Accessing the Last Array Element
console.log(fruits[fruits.length - 1], 'accessing the last array element');






//JavaScript Array length
//pushing a new array element at the last using array.length method
fruits[fruits.length] = "Lemon";
console.log(fruits, 'pushing a new array element at the last using array.length');





//Push
//pushing a new array element at the last using array.push method
fruits.push("Amla"); 
console.log(fruits, 'pushing a new array element at the last using array.push');





//The at() method returns an indexed element from an array
console.log(fruits.at(2), 'returns the index value')






//Get the third element of fruits using []
console.log(fruits[2], 'third element of fruits');




//The join() method also joins all array elements into a string
console.log(fruits.join(" * "), 'it will join after each array element')




//array to .toString()
console.log(fruits.toString());




//Push and Pop- last/end

//The pop() method removes the last element from an array
console.log(fruits.pop(), 'The pop() method removes the last element from an array');


//The push() method adds a new element to an array (at the end)
console.log(fruits.push('Kiwi'), 'the length of an array after push');
console.log(fruits,'The push() method adds a new element to an array (at the end)');


//Shifting Elements - first/start

//Shifting is equivalent to popping, but working on the first element instead of the last.
console.log(fruits.shift(), 'fruits.shift()');




//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruits.unshift('Lemon'), 'fruits.unshift()');


console.log(fruits[0])
















//Looping Array Elements
let listText = "<ul>";

for (let i = 0; i < fLength; i++) {
  listText += "<li>" + fruits[i] + "</li>";
}
listText += "</ul>";
console.log(listText, 'listText');         //<ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>



const message = 'K0a1m3a5l7i9';
// console.log(message);
for(i=0; i<message.length; i++) {
  let char = message[i];
  // console.log(typeof char, char, "char");
  let convChar = Number(char);
    // console.log(typeof convChar, convChar, "convChar");
    if(convChar - convChar !== 0){
      console.log(char);
      // console.log(convChar);
    };
};

const arr=[1,2,3,9,8,7];
// exp o/p: sum of arr
// console.log(arr);
let firstArr = arr[0] + arr[1];
// console.log(firstArr);
let newAddition = 0;
for(i=0; i < arr.length; i++){
  newAddition = newAddition + arr[i];
  console.log(newAddition, "newAddition");
  
};

//even num
const arra=[15, 19, 12, 1, 6, 5, 3, 9, 11, 8];
let evenNum;
for(i=0; i<arra.length; i++){
  evenNum = arra[i] % 2 ;
  if(evenNum === 0){
      console.log(evenNum, arra[i]);
  }
};
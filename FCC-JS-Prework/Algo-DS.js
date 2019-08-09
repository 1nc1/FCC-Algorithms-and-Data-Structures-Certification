// const nextInLine = (arr, item) => {
//     arr.push(item);
//     var removed = arr.shift();

//     return removed;
// };

// ------------------------------------------
// You will write a card counting function. 
// It will receive a card parameter, which can be a number or a string, 
// and increment or decrement the global count variable according 
// to the card's value (see table). The function will then return a 
// string with the current count and the string Bet if the count is 
// positive, or Hold if the count is zero or negative. The current count 
// and the player's decision (Bet or Hold) should be separated by a single space.


// var count = 0;

// function cc(card) {
//     // Only change code below this line
//     switch(card){
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//         count++;
//         break;
//       case 10:
//       case "J":
//       case "Q":
//       case "K":
//       case "A":
//         count--;
//         break;
//     }
    
//     if (count > 0){
//       return count + " Bet";
//     } else {
//       return count + " Hold";
//     }
// //     Only change code above this line
//   }
// cc(2), cc(10);
// }

// Write a function that returns array that logs 1-255.

// function get_array() {
//   let arr = [];
//   for(let i = 1; i < 256; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(get_array());

// Write a function that would get the sum of all
// the even numbers from 1 to 1000.

// function sum_even_numbers() {
//   let sum = 0;
//   for(let i = 1; i < 1001; i++) {
//     if(i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum_even_numbers());

// Write a function that returns the sum of all
// the odd numbers from 1 to 5000.

// function sum_odd_5000() {
//   let sum = 0;
//   for(let i = 1; i < 5001; i++) {
//     if(i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum_odd_5000());

// Write a function that returns the sum of all
// the values within an array.

// function iterArr(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(iterArr([1,2,5]));

// Given an array with multiple values, write a
// function that returns the maximum number
// in the array.

// function findMax(arr) {
//   let max = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([6,34,-9]));
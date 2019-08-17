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
// --------------------------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------------------------
// Given an array with multiple values, write a
// function that returns the average of the values
// in the array.

// function findAvg(arr) {
//   let sum = 0;
//   let avg = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   avg = sum / arr.length;

//   return avg;
// }

// console.log(findAvg([2,16,23,89]));
// --------------------------------------------------------------------------------------------------------------
// Write a function that would return an array
// of all the odd numbers between 1 and 50.

// function oddNumbers() {
//   let arr = [];
//   for(let i = 1; i < 51; i++) {
//     if(i % 2 !== 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(oddNumbers());
// --------------------------------------------------------------------------------------------------------------
// Given value of Y, write a function that takes an array and
// returns the number of values that are greater than Y.

// function greaterY(arr, Y) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > Y) {
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(greaterY([1,3,5,7],3));
// --------------------------------------------------------------------------------------------------------------
// Given an array with multiple values, write a function
// that replaces each value in the array with the product
// of the original value multiplied by itself.

// function squareVal(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] *= arr[i];
//     }
//     return arr;
// }

// console.log(squareVal([1,5,10,2]));
// --------------------------------------------------------------------------------------------------------------
// Given an array with multiple values, write a function
// that replaces any negative numbers within the array
// with the value of 0.

// function noNeg(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }

// console.log(noNeg([3,8,-6,22,-2]));
// --------------------------------------------------------------------------------------------------------------
// Given an array with multiple values, write a function
// that returns a new array that only contains the
// maximum, minimum, and average values of the original array.

// function maxMinAvg(arr) {
//     let arrnew = [];
//     let max = 0;
//     let min = 0;
//     let sum = 0;
//     let avg = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     for(let i = 0; i < arr.length; i++) {
//         sum += i;
//         avg = sum / arr.length;
//     }
//     arrnew.push(max);
//     arrnew.push(min);
//     arrnew.push(avg);
//     return arrnew;
// }

// console.log(maxMinAvg([2,6,17,42]));
// --------------------------------------------------------------------------------------------------------------
// Write a function that will swap the first and last values
// of any given array.

// function swap(arr) {
//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     return arr;
// }

// console.log(swap([7,23,-4,9]));
// --------------------------------------------------------------------------------------------------------------
// Write a function that takes an array of numbers and
// replaces any negative values within the array with
// the string 'Dojo'.

// function numToStr(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 'Dojo';
//         }
//     }
//     return arr;
// }

// console.log(numToStr([5,13,-5,-9,32]));
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --- END OF FCC ALGORITHMS ---
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// --- BOOTCAMP ALGORITHMS ---

// Set myNumber to 42. Set myName to your name.
// Now swap myNumber into myName & vice versa.

// var myNumber = 42;
// var myName = 'Name';
// var temp = myNumber;
// myNumber = myName;
// myName = temp;

// console.log(myName, myNumber);
// --------------------------------------------------------------------------------------------------------------
// Print integers from -52 to 1066 using a FOR loop.

// for(let i = -52; i < 1067; i++) {
//     console.log(i);
// }

// --------------------------------------------------------------------------------------------------------------
// Create beCheerful(). Within it, console.log string "good morning!", call it 98 times.

// function beCheerful() {
//     for(let i = 1; i < 99; i++) {
//         console.log('good morning!');
//     }
// }

// beCheerful();

// --------------------------------------------------------------------------------------------------------------
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// for(let i = -300; i <= 0; i++) {
//     if(i % 3 === 0) {
//         if(i === -3 || i === -6) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }

// --------------------------------------------------------------------------------------------------------------
// Print integers from 2000 to 5280, using a WHILE.

// var i = 2000;

// while(i < 5281) {
//     console.log(i);
//     i++;
// }

// --------------------------------------------------------------------------------------------------------------
// If 2 given numbers represent your birth month and day
// in either order, log "How did you know?", else log
// "Just another day...."

// function birthdayLog(b1, b2) {
//     var day = 24;
//     var month = 2;
//     if(b1 === day || b2 === day) {
//         if(b1 === month || b2 === month) {
//             console.log('How did you know?');
//         } else {
//             console.log('Just another day....');
//         }
//     }
// }

// console.log(birthdayLog(3,24));

// --------------------------------------------------------------------------------------------------------------

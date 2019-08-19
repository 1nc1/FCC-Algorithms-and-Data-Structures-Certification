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

// PAGE 18

// Setting and Swapping

// Set myNumber to 42. Set myName to your name.
// Now swap myNumber into myName & vice versa.

// var myNumber = 42;
// var myName = 'Name';
// var temp = myNumber;
// myNumber = myName;
// myName = temp;

// console.log(myName, myNumber);
// --------------------------------------------------------------------------------------------------------------
// Print -52 to 1066

// Print integers from -52 to 1066 using a FOR loop.

// for(let i = -52; i < 1067; i++) {
//     console.log(i);
// }
// --------------------------------------------------------------------------------------------------------------
// Don’t Worry, Be Happy

// Create beCheerful(). Within it, console.log string "good morning!", call it 98 times.

// function beCheerful() {
//     for(let i = 1; i < 99; i++) {
//         console.log('good morning!');
//     }
// }

// beCheerful();
// --------------------------------------------------------------------------------------------------------------
// Multiples of Three – but Not All

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
// Printing Integers with While

// Print integers from 2000 to 5280, using a WHILE.

// var i = 2000;

// while(i < 5281) {
//     console.log(i);
//     i++;
// }
// --------------------------------------------------------------------------------------------------------------
// You Say It’s Your Birthday

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
// Leap Year

// Write a function that determines wether a given year
// is a leap year. If a year is divisible by four,
// it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

// function leapYearCheck(givenYear) {
//     if(givenYear % 4 === 0) {
//         if(givenYear % 100 !== 0) {
//             console.log('leap year');
//         } else {
//             console.log('not a leap year.');
//         }
//     }
// }

// leapYearCheck(1800);
// --------------------------------------------------------------------------------------------------------------
// Print and Count

// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

// var howMany = [];
// for(let i = 512; i < 4097; i++) {
//     if(i % 5 === 0) {
//         console.log(i);
//         howMany.push(i);
//     }
// }

// console.log(howMany.length);
// --------------------------------------------------------------------------------------------------------------
// Multiples of Six

// Print multiples of 6 up to 60,000 using a WHILE.

// var i = 0;
// while(i < 60001) {
//     i++
//     if(i % 6 === 0) {
//         console.log(i);
//     }
// }
// --------------------------------------------------------------------------------------------------------------
// Counting, the Dojo Way

// Print integers 1 to 100. If divisible by 5, print "Coding" instead.
// If by 10, also print " Dojo"

// for(let i = 0; i < 101; i++) {
//     if(i % 5 === 0 && i % 10 === 0) {
//         console.log('Coding Dojo');
//     } else if(i % 5 === 0) {
//         console.log('Coding');
//     } else {
//         console.log(i);
//     }
// }
// --------------------------------------------------------------------------------------------------------------
// What Do You Know?

// Your function will be given an input parameter "incoming".
// Please console.log this value.

// function inc(incoming) {
//     console.log(incoming);
// }

// inc('Coding Dojo');
// --------------------------------------------------------------------------------------------------------------
// Whoa, That's Sucker's Huge...

// Add odd integers from -300,000 to 300,000 and console.log
// the final sum. Is there a shortcut?

// function oddIntegers() {
//     var sum = 0;
//     for(let i = -300000; i < 300001; i++) {
//         if(i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(oddIntegers());
// --------------------------------------------------------------------------------------------------------------
// Countdown by Fours

// Log positive numbers starting at 2016, counting down
// by fours (exclude 0), without a FOR loop.

// var startN = 2016;

// while(startN > 1) {
//     console.log(startN);
//     startN -= 4;
// }
// --------------------------------------------------------------------------------------------------------------
// Flexible Countdown

// Given lowNum, highNum, mult, print multiples of mult from
// highNum down to lowNum, using a FOR.

// function flexCount(lowNum, highNum, mult) {
//     for(highNum = highNum; highNum > lowNum; highNum--) {
//         if(highNum % mult === 0) {
//             console.log(highNum);
//         }
//     }
// }

// flexCount(2,9,3);
// --------------------------------------------------------------------------------------------------------------
// The Final Countdown

// Given 4 parameters (param1, param2, param3, param4), print the multiples
// of param1, starting at param2 and extending to param3. One exception:
// if a multiple is equal to param 4, then don't print it. Do this using
// a WHILE.

// function finalCount(param1, param2, param3, param4) {
//     while(param2 < param3) {
//         param2++;
//         if(param2 % param1 === 0) {
//             if(param2 === param4) {
//                 continue;
//             } else {
//                 console.log(param2);
//             }
//         }
//     }
// }

// finalCount(3,5,17,9);
// --------------------------------------------------------------------------------------------------------------
// PAGE 20

// Countdown

// Create a function that accepts a number as an input. Return
// a new array that counts down by one, from the number down to 0.
// How long is this array?

// function arrCountdown(n) {
//     arr = [];
//     for(n = n; n >= 0; n--) {
//         arr.push(n);
//     }
//     return arr;
// }

// console.log(arrCountdown(5));
// The length of this array would be the value of n + 1.
// --------------------------------------------------------------------------------------------------------------
// Print and Return

// Your function will receive an array with two numbers.
// Print the first value, and return the second.

// function printNreturn(n1, n2) {
//     console.log(n1);
//     return n2;
// }

// printNreturn(4,6);
// --------------------------------------------------------------------------------------------------------------
// First Plus Length

// Given an array, return the sum of the first value in the array,
// plus the array's length. What happens if the array's first value
// is not a number, but a string or a boolean.

// function firstPlusLength(arr) {
//     var sum = '';
//     sum = arr[0] + arr.length;
//     return sum;
// }

// console.log(firstPlusLength(['dojo',7,3]));
// --------------------------------------------------------------------------------------------------------------
// Values Greater than Second

// For [1,3,5,7,9,13], print values that are greater than its 2nd value.
// Return how many values this is.

// function vGreaterThan2nd(arr) {
//     var howManyV = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[1]) {
//             howManyV++;
//         }
//     }
//     return howManyV;
// }

// console.log(vGreaterThan2nd([1,3,5,7,9,13]));
// --------------------------------------------------------------------------------------------------------------
// Values Greater than Second, Generalized

// Write a function that accepts any array, and returns a new array
// with the array values that are greater than its 2nd value.
// Print how many values this is. What will you do if the array
// is only one element long?

// function vGreaterThan2nd2(arr) {
//     var arrnew = [];
//     var howManyV2 = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[1]) {
//             arrnew.push(arr[i]);
//         }
//         if(arr.length === 1) {
//             console.log('Array only contains one element.');
//         }
//     }
//     howManyV2 = arrnew.length;
//     return howManyV2;
// }

// console.log(vGreaterThan2nd2([1,3,5,7,9,13]));
// --------------------------------------------------------------------------------------------------------------
// This length, That Value

// Given two numbers, return array of length num1 with each value num2.
// Print "Jinx!" if they are same.

// I don't understand what this is asking of me, sorry!
// --------------------------------------------------------------------------------------------------------------
// Fit the First Value

// function fitTheFirstValue(arr) {
//     if(arr[0] > arr.length) {
//         console.log('Too big!');
//     } else if(arr[0] < arr.length) {
//         console.log('Too small!');
//     } else {
//         console.log('Just right!');
//     }
// }

// fitTheFirstValue([5,3,1,6,8]);
// --------------------------------------------------------------------------------------------------------------
// Fahrenheit to Celsius

// Kelvin wants to convert between temperature scales. Create
// fahrenheitToCelsius(fDegrees) that accepts a number of degrees
// in Fahrenheit, and returns the equivalent temperature as expressed
// in Celsius degrees. For review, Fahrenheit = (9 / 5 * Celsius) + 32.

// function fahrenheitToCelsius(fDegrees) {
//     return (fDegrees - 32) * 5 / 9;
// }

// console.log(fahrenheitToCelsius(67.8));
// --------------------------------------------------------------------------------------------------------------
// Celsius to Fahrenheit

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
// and returns the equivalent temperature expressed in Fahrenheit degrees.

// function celsiusToFahrenheit(cDegrees) {
//     return (cDegrees * 9 / 5) + 32;
// }

// console.log(celsiusToFahrenheit(20.5));
// --------------------------------------------------------------------------------------------------------------
// PAGE 22

// Biggie Size

// Given an array, write a function that changes all positive numbers in the array
// to "big".

// function bigSize(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             arr[i] = 'big';
//         }
//     }
//     return arr;
// }

// console.log(bigSize([-1,3,5,-5]));
// --------------------------------------------------------------------------------------------------------------
// Print Low, Return High

// Create a function that takes array of numbers. The function should
// print the lowest value in the array, and return the highest value
// in the array.

// function pLowrHigh(arr) {
//     var min = 0;
//     var max = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i];
//             console.log(min);
//         }
//         if(arr[i] > max) {
//             max = arr[i];
//             return max;
//         }
//     }
// }

// console.log(pLowrHigh([-5,6,78]));
// --------------------------------------------------------------------------------------------------------------
// Print One, Return Another

// Build a function that takes array of numbers. The function should
// print second-to-last value in the array, and return first odd value
// in the array.

// function pOnerAnother(arr) {
//     var fOddValue = 0;
//     console.log(arr[arr.length - 2]);
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0) {
//             fOddValue = arr[i];
//             break;
//         }
//     }
//     return fOddValue;
// }

// console.log(pOnerAnother([2,6,3,7,34,56]));
// --------------------------------------------------------------------------------------------------------------




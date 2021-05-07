"use strict";

// 1. Fibanocci Generator
/* Write a Fibanocci Generator function that returns an array of n numbers where n is given in the function. The Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
0	1	1	2	3	5	8	13	21	34  55	89	144	233	......
fibonacciGenerator(4) = [0, 1, 1 , 2]
fibonacciGenerator(3) = [0, 1, 1]
fibonacciGenerator(2) = [0, 1]
fibonacciGenerator(1) = [0]
fibonacciGenerator(0) = []
*/
function fibonacciGenerator(n) {
    let current = 0;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(current);
        current = (arr[arr.length - 1] || 1) + (arr[arr.length - 2] || 0);
    }
    return arr;
}

console.log(fibonacciGenerator(2));

// 2. Sorting the Odd way!
/* 
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!
 */

/* describe("Tests", () => {
    it("test", () => {
  Test.assertDeepEquals(sortItOut([11,22,33,44,55,55,90.4,4,78]),([11,33,55,55,90.4,78,44,22,4]));
  Test.assertDeepEquals(sortItOut([26,243,52,2,432414,1,11,46,32]),([1,11,243,432414,52,46,32,26,2]));
  Test.assertDeepEquals(sortItOut([19,65,88,112,60,14,33,49,88]),([19,33,49,65,112,88,88,60,14]));
  Test.assertDeepEquals(sortItOut([]),([]))
  Test.assertDeepEquals(sortItOut([68,25,99,50,10,67,2,5,8,34,67]),([5,25,67,67,99,68,50,34,10,8,2]));
    });
  }); */

function sortItOut(array) {
    const oddSorted = array
        .filter((n) => Math.floor(n) % 2 === 1)
        .sort((a, b) => a - b);
    const evenSorted = array
        .filter((n) => Math.floor(n) % 2 === 0)
        .sort((a, b) => b - a);
    return [...oddSorted, ...evenSorted];
}
console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]));

// 3. Regex validate PIN code
/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */
function validatePIN(pin) {
    return /^((\d{4})|(\d{6}))$/.test(pin); //return true or false
}
console.log(validatePIN("44444"));

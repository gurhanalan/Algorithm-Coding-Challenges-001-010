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

// 4. Highest and Lowest
/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

function highAndLow(nums) {
    const arrNums = nums.split(" ").map((cur) => +cur);
    const min = Math.min(...arrNums);
    const max = Math.max(...arrNums);
    return "" + max + " " + min;
}

function highAndLow2(nums) {
    const arrNums = nums.split(" ").map((cur) => +cur);

    return arrNums
        .reduce(
            (acc, curr, i, arr) => {
                acc[0] = curr > acc[0] ? curr : acc[0];
                acc[1] = curr < acc[1] ? curr : acc[1];
                return acc;
            },
            [arrNums[0], arrNums[0]]
        )
        .join(" ");
}

console.log(highAndLow2("1 2 3 4 5"));

// 5. The highest profit wins!
/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
 */
function minMax(arrNums) {
    return arrNums.reduce(
        (acc, curr) => {
            acc[0] = curr < acc[0] ? curr : acc[0];
            acc[1] = curr > acc[1] ? curr : acc[1];
            return acc;
        },
        [arrNums[0], arrNums[0]]
    );
}
function minMax2(arrNums) {
    return arrNums.reduce(
        (acc, curr) => [
            curr < acc[0] ? curr : acc[0],
            curr > acc[1] ? curr : acc[1],
        ],
        [arrNums[0], arrNums[0]]
    );
}

console.log(minMax2([1, 2, 3, 4, 5]));

// 6. Friend or Foe?
/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

function friend(friends) {
    return friends.filter((el) => /^[a-z]{4}$/i.test(el));
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(/^[a-z]{4}$/i.test("1yan"));

// 7. Printer Errors

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22" */

function printerError(s) {
    const noerror = s.match(/[a-m]/gi).length;
    return `${s.length - noerror}/${s.length}`;
}
function printerError2(s) {
    return `${s.match(/[^a-m]/gi).length}/${s.length}`;
}

console.log(printerError2("aaaxbbbbyyhwawiwjjjwwm"));

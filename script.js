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

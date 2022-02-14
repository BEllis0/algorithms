"use strict";
var fibMemo = function (num) {
    // base case: if the number is 1 or 2, return 1 since the first two nums are 1 
    if (num <= 2)
        return 1;
    // recurse with the num below and 2 nums below
    return fib(num - 1) + fib(num - 2);
};
module.exports.fibMemo = fibMemo;

"use strict";
var bubbleSort = function (array) {
    // array length
    var len = array.length;
    //outter func iterate array starting at end
    for (var i = len - 1; i >= 0; i--) {
        //inner func iterate array from beginning
        for (var z = 1; z <= i; z++) {
            // if prev item is less than current
            if (array[z - 1] > array[z])
                // save prev value in a temp var
                var tempValue = array[z - 1];
            // swap current and prev
            array[z - 1] = array[z];
            array[z] = tempValue;
        }
    }
    //return 
    return array;
};
var arrToSort = [52, 11, 8, 99, 302, 55, 55, 67, 1, 56, 103, 476, 111, 71, 32, 86, 91, 254, 500, 308, 337, 396];
var testBubbleSort = bubbleSort(arrToSort);
console.log(testBubbleSort);

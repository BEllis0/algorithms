"use strict";
var selectionSort = function (array) {
    var len = array.length; // reference to array length
    var lowestNum; // store lowest num in 2nd iteration
    var temp; // create temp var to save value
    // iterate through array
    for (var i = 0; i < len; i++) {
        lowestNum = i;
        // iterate array starting at next index
        for (var z = i + 1; z < len; z++) {
            // store lowest num found
            if (array[z] < array[i]) {
                // set lowest num
                lowestNum = z;
            }
        }
        // swap current index with lowest num
        temp = array[i];
        array[i] = array[lowestNum];
        array[lowestNum] = temp;
    }
    //return
    return array;
};
var arrToSort = [52, 11, 8, 99, 302, 55, 55, 67, 1, 56, 103, 476, 111, 71, 32, 86, 91, 254, 500, 308, 337, 396];
var testSelectionSort = selectionSort(arrToSort);
console.log(testSelectionSort);

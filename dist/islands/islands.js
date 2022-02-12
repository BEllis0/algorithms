"use strict";
var assertionTest = function (expected, actual) {
    if (expected === actual) {
        return "Test successful, islands: ".concat(actual);
    }
    else {
        return "Testing error: Expected ".concat(expected, " but recieved ").concat(actual);
    }
};
module.exports = calculateNumberOfIslands = function (grid) {
    // save island count
    var islandCount = 0;
    if (!grid.length)
        return islandCount;
    // loop through grid row
    for (var row = 0; row < grid.length; row++) {
        // loop through each column
        for (var column = 0; column < grid[row].length; column++) {
            // if current column in current row is 1
            if (grid[row][column] === 1) {
                // increment island count
                islandCount++;
                // use depth first search to check neighbors
                depthSearch(grid, row, column);
            }
        }
    }
    // return island count
    return islandCount;
};
var depthSearch = function (grid, row, col) {
    // check boundaries, base case
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
        return;
    }
    // reference to current value
    var currentValue = grid[row][col];
    // if current value is an island
    if (currentValue === 1) {
        // change value at that index to show it as marked
        grid[row][col] = '#';
        // recursively check neighbors
        depthSearch(grid, row + 1, col);
        depthSearch(grid, row - 1, col);
        depthSearch(grid, row, col + 1);
        depthSearch(grid, row, col - 1);
    }
};
var grid1 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
var grid2 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];
var grid3 = [
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
];
//actual values
var actual1 = calculateNumberOfIslands(grid1);
var actual2 = calculateNumberOfIslands(grid2);
var actual3 = calculateNumberOfIslands(grid3);
//expected values
var expected1 = 1;
var expected2 = 3;
var expected3 = 7;
//tests
var assertionTest1 = assertionTest(expected1, actual1);
var assertionTest2 = assertionTest(expected2, actual2);
var assertionTest3 = assertionTest(expected3, actual3);

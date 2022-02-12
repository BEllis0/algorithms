"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../../islands/islands.js');
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
describe('Count Islands', function () {
    it('should find 1 island', function () {
        assert(app(grid1), 1);
    });
    it('should find 3 island', function () {
        assert(app(grid2), 3);
    });
    it('should find 7 island', function () {
        assert(app(grid3), 7);
    });
});

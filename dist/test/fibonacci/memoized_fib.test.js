"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../../fibonacci/memoized_fib.js').fib;
describe('Memoized Fib', function () {
    it('fib should return a number', function () {
        expect(app(1)).to.be.a('number');
    });
    it('fib 0 should equal 0', function () {
        assert(app(0), 0);
        assert(app(1), 1);
        assert(app(2), 1);
    });
    it('fib 1 or 2 should equal 1', function () {
        assert(app(1), 1);
        assert(app(2), 1);
    });
    it('fib 20 should equal 6765', function () {
        assert(app(1), 1);
        assert(app(2), 1);
    });
});

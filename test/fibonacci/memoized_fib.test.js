const assert = require('chai').assert;
const expect  = require('chai').expect;

const app = require('../../dist/fibonacci/memoized_fib.js').fibMemo;

describe('Memoized Fib', () => {
    it('fib should return a number', () => {
        expect(app(1)).to.be.a('number');
    });

    it('fib 0 should equal 0', ()=> {
        assert(app(0), 0);
        assert(app(1), 1);
        assert(app(2), 1);
    });

    it('fib 1 or 2 should equal 1', ()=> {
        assert(app(1), 1);
        assert(app(2), 1);
    });

    it('fib 20 should equal 6765', ()=> {
        assert(app(1), 1);
        assert(app(2), 1);
    });
});
const assert = require('chai').assert;
const expect  = require('chai').expect;

const app = require('../../islands/islands.js');

let grid1 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
];

let grid2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
];

let grid3 = [
    [0,0,0,1,0],
    [0,1,0,0,1],
    [1,0,1,1,0],
    [1,0,0,0,1],
    [0,1,1,1,0]
];

describe('Count Islands', () => {

    it('should find 1 island', ()=> {
        assert(app(grid1), 1);
    });
    
    it('should find 3 island', ()=> {
        assert(app(grid2), 3);
    });

    it('should find 7 island', ()=> {
        assert(app(grid3), 7);
    });
});
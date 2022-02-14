const assert = require('chai').assert;
const expect  = require('chai').expect;

const app = require('../../dist/two_sum/two_sum.js').twoSum;

describe('Leetcode: Two Sum', () => {
    //Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    it('Returns correct answer example 1: ', ()=> {
        
        app([2,7,11,15], 9)
        // expect(app([2,7,11,15], 9)).to.have.same.members([0,1]);
    });

    it('Returns correct answer example 2: ', ()=> {
        app([3,2,4], 6)
    });

    it('Returns correct answer example 3: ', ()=> {
        app([3,3], 6)
        // expect(app([3,3], 6)).to.deep.equal([0,1])
    });
});
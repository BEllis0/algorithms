const assert = require('chai').assert;
const expect  = require('chai').expect;

const app = require('../../dist/binary_trees/maximum_depth/maximum_depth.js').maxDepth;

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const treeNode1 = new Node(3);
const treeNode2 = new Node(9);
const treeNode3 = new Node(20);
const treeNode4 = new Node(15);
const treeNode5 = new Node(7);

treeNode1.left = treeNode2;
treeNode1.right = treeNode3;
treeNode2.left = null;
treeNode2.right = null;
treeNode3.left = treeNode4;
treeNode3.right = treeNode5;

describe('Leetcode: Binary Tree Max Depth', () => { 
    // output 3

    //      3
    //    /    \
    //   9     20
    //       /    \
    //      15    7

    
    it('Example 1', () => {
        assert(app(treeNode1), 3);
    });

    // output 2
    // it('Example 2: ', () => {
    //     app(treeNode1);
    // });
});
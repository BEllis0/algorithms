"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../../dist/linked_lists/reverse.js');
console.log(app);
var LLNode = /** @class */ (function () {
    function LLNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    ;
    return LLNode;
}());
;
var node1 = new LLNode(1);
var node2 = new LLNode(2);
var node3 = new LLNode(3);
var node4 = new LLNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
describe('Reversed Linked List', function () {
    it('head exists', function () {
        expect(app(node1)).to.exist;
    });
});

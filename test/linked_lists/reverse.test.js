const assert = require('chai').assert;
const expect  = require('chai').expect;

const app = require('../../dist/linked_lists/reverse.js').reversedLinkedList;
class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};

const node1 = new LLNode(1);
const node2 = new LLNode(2);
const node3 = new LLNode(3);
const node4 = new LLNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const generateTestHead = () => {
    const testHead1 = node1;
    testHead1.next = node2;
};


describe('Reversed Linked List', () => {
    it('head exists', () => {
        expect(app(node1));
    });
});
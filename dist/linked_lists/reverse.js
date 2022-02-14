"use strict";
;
var insertLLNode = function (node) {
};
var reversedLinkedList = function (head) {
    var current = head;
    var stack = [];
    while (current) {
        stack.push(current.val);
        current = current.next;
    }
    current = head;
    while (current) {
        current.val = stack.pop();
        current = current.next;
    }
    console.log('head', head);
    return head;
};
module.exports = {
    reversedLinkedList: reversedLinkedList,
    insertLLNode: insertLLNode
};

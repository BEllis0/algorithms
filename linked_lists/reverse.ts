interface LLNode  {
    val: any,
    next: any,
    prev: LLNode|null
};

class LLNode {
    constructor(val:number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};

const reversedLinkedList = (head: LLNode) => {
    let current = head;
    let stack = [];
    while(current) {
        stack.push(current.val);
        current = current.next;
    }
    current = head;

    while(current) {
        current.val = stack.pop();
        current = current.next;
    }

    return head;
};

module.exports = {
    reversedLinkedList,
};

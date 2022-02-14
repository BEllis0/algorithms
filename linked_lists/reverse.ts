interface LLNode  {
    val: number|null,
    next: LLNode|null,
    prev: LLNode|null
};

const insertLLNode = (node: LLNode) => {

};

const reversedLinkedList = (head: LLNode) => {
    let current = head;
    while(current) {
        
        current = current.next;
    }
    return current;
};

module.exports = {
    reversedLinkedList,
    insertLLNode
};

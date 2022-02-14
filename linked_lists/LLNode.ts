interface LLNode  {
    val: any,
    next: any,
    prev: LLNode|null
};

module.exports = class LLNode implements LLNode {
        val:number|null;
        next:object|null;
        prev:object|null;
    constructor(val:number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};
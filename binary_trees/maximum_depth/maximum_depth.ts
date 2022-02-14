/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Input: root = [3,9,20,null,null,15,7]
    Output: 3
    Example 2:

    Input: root = [1,null,2]
    Output: 2
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

type TreeNode = {
    val: number|null,
    left: any,
    right: any
};

 module.exports.maxDepth = function(root: any) {
    if(root === null) return root;
    let queue = [ root ];
    let depth = 0;
    while(queue.length) {
        // increment depth
        depth++;

        for (let i = 0; i < queue.length; i++) {
            const current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return depth;
};
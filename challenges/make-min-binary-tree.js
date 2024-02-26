/*

Given a sorted array, find a way to make a binary tree with minimal height

Example:
Input: [1, 2, 3, 4, 5, 6, 7]
Output:
         4
        /   \
    2      6
   /  \  /  \
 1  3   5  7

Input: [1, 2, 3, 4, 5, 6, 7, 8]
Output:
          5
        /   \
     3        7
   /  \      / \
2     4   6   8  
/
1

*/

function BinaryTree(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

const makeMinBinaryTree = (arr) => {};

module.exports = { BinaryTree, makeMinBinaryTree };

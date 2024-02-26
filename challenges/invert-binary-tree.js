/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

function BinaryTree(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

const invertBinaryTree = () => {};

module.exports = { BinaryTree, invertBinaryTree };

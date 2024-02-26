/*

Given a binary tree, check if it is balanced (ie the heights of the two subtrees of any node never differ by more than one.

Example:
Input:
    1
   / \
  2   3
 / \ / \
4  5 6  7

Output: true

Input:
    1
   / 
  2   
 / \
4  5

Output: false

*/

function BinaryTree(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

const checkBalancedBinaryTree = (root) => {};

module.exports = { BinaryTree, checkBalancedBinaryTree };

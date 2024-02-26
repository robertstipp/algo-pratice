const {
    BinaryTree, 
  checkBalancedBinaryTree,
} = require("../challenges/checkBalancedBinaryTree");

describe("checkBalancedBinaryTree test", () => {
    test("returns true for a balanced binary tree", () => {
        const binaryTree = new BinaryTree(4);
        binaryTree.left = new BinaryTree(2);
        binaryTree.right = new BinaryTree(7);
        binaryTree.left.left = new BinaryTree(1);
        binaryTree.left.right = new BinaryTree(3);
        binaryTree.right.left = new BinaryTree(6);
        binaryTree.right.right = new BinaryTree(9);
        expect(checkBalancedBinaryTree(binaryTree)).toBe(true);
  });

    test("should return false for an unbalanced binary tree", () => {
        const binaryTree = new BinaryTree(1);
        binaryTree.left = new BinaryTree(2);
        binaryTree.left.left = new BinaryTree(4);
        binaryTree.left.right = new BinaryTree(5);
        binaryTree.left.left.left = new BinaryTree(8);
        binaryTree.left.left.right = new BinaryTree(9);
        binaryTree.right = new BinaryTree(3);
        binaryTree.right.left = new BinaryTree(6);
        binaryTree.right.right = new BinaryTree(7);
        expect(checkBalancedBinaryTree(binaryTree)).toBe(false);
  });

    test("should return true for an empty tree", () => {
        expect(checkBalancedBinaryTree(null)).toBe(true);
    });
    
    test("should return true for a tree with only one node", () => {
        const binaryTree = new BinaryTree(1);
        expect(checkBalancedBinaryTree(binaryTree)).toBe(true);
    });

    test("should return true for a tree with only left node", () => {
        const binaryTree = new BinaryTree(1);
        binaryTree.left = new BinaryTree(2);
        expect(checkBalancedBinaryTree(binaryTree)).toBe(true);
    });

    test("should return true for a tree with only right node", () => {
        const binaryTree = new BinaryTree(1);
        binaryTree.right = new BinaryTree(2);
        expect(checkBalancedBinaryTree(binaryTree)).toBe(true);
    });
});

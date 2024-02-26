const { BinaryTree, maxDepth } = require("../challenges/max-depth");

describe("maxDepth test", () => {
  it("returns the max depth of a binary tree", () => {
    const binaryTree = new BinaryTree(3);
    binaryTree.left = new BinaryTree(9);
    binaryTree.right = new BinaryTree(20);
    binaryTree.right.left = new BinaryTree(15);
    binaryTree.right.right = new BinaryTree(7);

    expect(maxDepth(binaryTree)).toBe(3);
  });

  it("should correct handle balanced binary tree", () => {
    const binaryTree = new BinaryTree(3);
    binaryTree.right = new BinaryTree(20);
    binaryTree.right.right = new BinaryTree(7);
    binaryTree.right.right.right = new BinaryTree(12);

    expect(maxDepth(binaryTree)).toBe(4);
  });

  it("should return handle if binary tree is empty", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("should correctly handle if binary tree has only one node", () => {
    const binaryTree = new BinaryTree(3);
    expect(maxDepth(binaryTree)).toBe(1);
  });
});

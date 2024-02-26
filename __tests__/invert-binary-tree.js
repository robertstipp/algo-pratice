const {
  BinaryTree,
  invertBinaryTree,
} = require("../challenges/invert-binary-tree");

describe("invertBinaryTree tests", () => {
  it("returns an inverted binary tree", () => {
    const binaryTree = new BinaryTree(4);
    binaryTree.left = new BinaryTree(2);
    binaryTree.right = new BinaryTree(7);
    binaryTree.left.left = new BinaryTree(1);
    binaryTree.left.right = new BinaryTree(3);
    binaryTree.right.left = new BinaryTree(6);
    binaryTree.right.right = new BinaryTree(9);

    const expectedTree = new BinaryTree(4);
    expectedTree.left = new BinaryTree(7);
    expectedTree.right = new BinaryTree(2);
    expectedTree.left.left = new BinaryTree(9);
    expectedTree.left.right = new BinaryTree(6);
    expectedTree.right.left = new BinaryTree(3);
    expectedTree.right.right = new BinaryTree(1);

    expect(invertBinaryTree(binaryTree)).toEqual(expectedTree);
  });

  it("should return null if tree is empty", () => {
    expect(invertBinaryTree(null)).toBe(null);
  });

  it("should correctly handle tree with only one node", () => {
    const binaryTree = new BinaryTree(4);
    expect(invertBinaryTree(binaryTree)).toEqual(new BinaryTree(4));
  });

  it("should correcntly handle tree with only left node", () => {
    const binaryTree = new BinaryTree(4);
    binaryTree.left = new BinaryTree(2);

    const expectedTree = new BinaryTree(4);
    expectedTree.right = new BinaryTree(2);

    expect(invertBinaryTree(binaryTree)).toEqual(expectedTree);
  });

  it("should correctly handle tree with only right node", () => {
    const binaryTree = new BinaryTree(4);
    binaryTree.right = new BinaryTree(7);

    const expectedTree = new BinaryTree(4);
    expectedTree.left = new BinaryTree(7);

    expect(invertBinaryTree(binaryTree)).toEqual(expectedTree);
  });
});

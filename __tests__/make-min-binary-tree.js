const {
  BinaryTree,
  makeMinBinaryTree,
} = require("../challenges/makeMinBinaryTree");

const isBalanced = (node) => {
  if (!node) return { balanced: true, height: 0 };

  const left = isBalanced(node.left);
  const right = isBalanced(node.right);
  const balanced =
    left.balanced &&
    right.balanced &&
    Math.abs(left.height - right.height) <= 1;
  const height = Math.max(left.height, right.height) + 1;

  return { balanced, height };
};

const inOrderTraversal = (node, array = []) => {
  if (!node) return;
  inOrderTraversal(node.left, array);
  array.push(node.val);
  inOrderTraversal(node.right, array);
  return array;
};

describe("makeMinBinaryTree", () => {
  it("returns a balanced binary tree with minimal height from sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });
  it("should correctly handle even length array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("should correctly handle empty array", () => {
    const tree = makeMinBinaryTree([]);
    expect(tree).toBeNull();
  });

  it("should correctly handle array with negative numbers", () => {
    const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("should correctly handle array with single number", () => {
    const arr = [1];
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("should correctly handle large array", () => {
    const arr = Array.from({ length: 100 }, (_, i) => i);
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("works with a large array of negative numbers", () => {
    const arr = Array.from({ length: 100 }, (_, i) => -i);
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("works with a large array of mixed numbers", () => {
    const arr = Array.from({ length: 100 }, (_, i) => (i % 2 === 0 ? i : -i));
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });

  it("works with a large array of random numbers", () => {
    const arr = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 100)
    );
    arr.sort((a, b) => a - b);
    const tree = makeMinBinaryTree(arr);

    const { balanced, height } = isBalanced(tree);
    expect(balanced).toBeTruthy();
    expect(height).toBeLessThanOrEqual(Math.ceil(Math.log2(arr.length + 1)));

    const traversalResult = inOrderTraversal(tree);
    expect(traversalResult).toEqual(arr);
  });
});

const { circularLinkedList } = require("../challenges/circularLinkedList.js");

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = null;
  }
}

describe("circular linked list", () => {
  it("Function should null if no cycle exists ", () => {
    const head = new Node(0);
    a = head.next = new Node(1);
    b = a.next = new Node(2);
    c = b.next = new Node(3);

    expect(circularLinkedList(head)).toEqual(null);
  });

  it("Function should instance of repeated node if cycle ", () => {
    const head = new Node(0);
    a = head.next = new Node(1);
    b = a.next = new Node(2);
    c = b.next = new Node(3);
    d = c.next = b;
    expect(circularLinkedList(head)).toEqual(b);
  });

  it("Function should return null if list is empty", () => {
    const head = null;
    expect(circularLinkedList(head)).toEqual(null);
  });
});

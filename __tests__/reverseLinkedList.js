const { reverseLinkedList } = require("../challenges/reverseLinkedList");

class Node {
  constructor(val) {
    this.val = val || null;
    this.next = null;
  }
}

describe("reverseLinkedList", () => {
  it("should handle empty lists", () => {
    const list = null;
    expect(reverseLinkedList(list)).toBe(null);
  });

  it("should handle single lists", () => {
    const list = new Node(1);
    expect(reverseLinkedList(list))
  });
  
  test("should handle multiple nodes", () => {
    const list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(3);
    list.next.next.next = new Node(4);
    list.next.next.next.next = new Node(5);

    const listReverse = reverseLinkedList(list);
    const list2 = new Node(5);
    list2.next = new Node(4);
    list2.next.next = new Node(3);
    list2.next.next.next = new Node(2);
    list2.next.next.next.next = new Node(1);

    let curr = list2, curr2 = listReverse;
    while (curr && curr2) {
      expect(curr.val).toEqual(curr2.val);
      curr = curr.next, curr2 = curr2.next;
    }
  });
});



import { Node, reorderList } from "../challenges/reorderList";

describe("reorderList", () => {
  it("should reorder a linked list with even elements", () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);

    reorderList(head);

    expect(head.value).toBe(1);
    expect(head.next.value).toBe(4);
    expect(head.next.next.value).toBe(2);
    expect(head.next.next.next.value).toBe(3);
  });

  it("should reorder a linked list with odd elements", () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    reorderList(head);

    expect(head.value).toBe(1);
    expect(head.next.value).toBe(5);
    expect(head.next.next.value).toBe(2);
    expect(head.next.next.next.value).toBe(4);
    expect(head.next.next.next.next.value).toBe(3);
  });

  it("should handle an empty list", () => {
    const head = null;

    reorderLinkedList(head);

    expect(head).toBeNull();
  });

  it("should handle a single node list", () => {
    const head = new Node(1);

    reorderLinkedList(head);

    expect(head.val).toBe(1);
    expect(head.next).toBeNull();
  });
});

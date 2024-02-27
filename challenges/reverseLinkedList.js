// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Definition of linked list nodes:
// class Node {
//   constructor(val) {
//     this.val = val || null;
//     this.next = null;
//   }
// }

function reverseLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const reversedListHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;

  return reversedListHead;
}

module.exports = { reverseLinkedList };

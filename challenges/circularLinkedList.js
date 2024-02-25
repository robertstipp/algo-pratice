const circularLinkedList = (head) => {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }

  return null;
};

module.exports = { circularLinkedList };

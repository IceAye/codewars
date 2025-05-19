// ❓ DESCRIPTION:
// Implement the method length, which accepts a linked list (head), and returns the length of the list.
//
// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.
//
// The linked list is defined as follows:
//
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.
//
// ✅ SOLUTION 1:
function length(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

// ✅ SOLUTION 2:
function length(head) {
    if (head === null) return 0;
    return 1 + length(head.next);
}
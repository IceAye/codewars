function length(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

function length(head) {
    if (head === null) return 0;
    return 1 + length(head.next);
}
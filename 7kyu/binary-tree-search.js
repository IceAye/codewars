// ❓ DESCRIPTION:
// Given a number and a binary tree ( not a Binary Search Tree! ):
// return True/true if the given number is in the tree
// return False/false if it isn't
// Each node in the binary tree is either of this Node class or null

// ✅ SOLUTION:
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function search(n, root) {
    if (!root) return false;
    if (n === root.value) return true;
    return search(n, root.left) || search(n, root.right);
}

// 📌 TESTCASE:
console.log(search(666, null), false);

const root1 = new Node(666, new Node(555), new Node(444));
console.log(search(444, root1), true);
console.log(search(555, root1), true);
console.log(search(666, root1), true);
console.log(search(777, root1), false);

const root2 = new Node(42);
console.log(search(42, root2), true);
console.log(search(43, root2), false);

const SIZE = 20;
const nodes = Array.from({ length: SIZE }, (_, i) => new Node(i));

for (let i = 0; i < SIZE; i++) {
    const idx_left = 2 * i + 1;
    const idx_right = 2 * i + 2;
    nodes[i].left = nodes[idx_left] || null;
    nodes[i].right = nodes[idx_right] || null;
}

for (let i = 0; i < SIZE; i++) {
    console.log(search(i, nodes[0]), true);
}

console.log(search(SIZE, nodes[0]), false);

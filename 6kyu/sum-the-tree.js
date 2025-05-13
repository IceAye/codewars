// ❓ DESCRIPTION:
// Given a node object representing a binary tree:
//
// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.
//
// ✅ SOLUTION:
function sumTheTreeValues(root){
    let result = 0;

    function treeGo(node) {
        if (!node) return;
        result += node.value;
        treeGo(node.left);
        treeGo(node.right);
    }

    treeGo(root);
    return result;
}

// 📌 TESTCASE:
const simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
console.log(sumTheTreeValues(simpleNode), 13);

const unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
console.log(sumTheTreeValues(unbalancedNode), 12);
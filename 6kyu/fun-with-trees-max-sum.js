function maxSum(root) {
    if (!root) return 0;
    let max = -Infinity;

    function runNode(node, sum) {
        if (!node) return;
        sum += node.value;
        if (!node.left && !node.right) {
            if (sum > max) max = sum;
        }
        runNode(node.left, sum);
        runNode(node.right, sum);
    }

    runNode(root, 0);
    return max;
}

const simpleNode = {value: 17, left: {value: 3, left: {value: 2, left: null, right: null}, right: null}, right: {value: -10, left: {value: 16, left: null, right: null}, right: {value: 1, left:{value: 13, left: null, right: null}, right: null}}};
console.log(maxSum(simpleNode), 23);


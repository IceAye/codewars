function duplicateElements(m, n) {
    return m.filter(num => n.includes(num)).length > 0;
}

function duplicateElements(m, n) {
    return m.some(num => n.includes(num));
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true);
console.log(duplicateElements([9, 8, 7], [8, 1, 3]), true);
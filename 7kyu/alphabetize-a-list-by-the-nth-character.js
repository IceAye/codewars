function sortIt(list, n) {
    return list
        .split(', ')
        .sort((a, b) => a.charAt(n - 1).toLowerCase().localeCompare(b.charAt(n - 1).toLowerCase()) || a.localeCompare(b))
        .join(', ');
}

console.log(sortIt("bill, bell, ball, bull", 2)); // 'ball, bell, bill, bull'
console.log(sortIt("cat, dog, eel, bee", 3)); // 'bee, dog, eel, cat'

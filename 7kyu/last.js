function last(start, ...rest) {
    if (rest.length) return rest.pop();
    if (start.length) return [...start].pop();
    return start;
}

console.log(last(5));
console.log(last([1, 2, 3, 4]));
console.log(last("xyz"));
console.log(last(1, 2, 3, 4));
console.log(last([1, 2], [3, 4]));
console.log(last([[1, 2], [3, 4]]));
console.log(last([1]));
console.log(last("q"));
console.log(last(0));


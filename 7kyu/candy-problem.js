function candies(kids) {
    if (kids.length < 2) return -1;
    let max = Math.max(...kids);
    let total = 0;
    for (const kid of kids) {
        total += max - kid;
    }
    return total;
}

console.log(candies([5, 8, 6, 4])); //  9
console.log(candies([1, 2, 4, 6])); // 11
console.log(candies([1, 2])); //        1
console.log(candies([4, 2])); //        2
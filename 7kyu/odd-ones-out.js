function oddOnesOut(nums) {
    let map = new Map()
    for (const num of nums) {
        map.set(num, map.get(num) + 1|| 1)
    }
    return nums.reduce((total, curr) => {
        if (map.get(curr) % 2 === 0) total.push(curr);
        return total;
    }, [])
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])) // [1, 1]
console.log(oddOnesOut([75, 68, 75, 47, 68])) // [75, 68, 75, 68]
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])) // [67, 67]
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])) // [100, 100, 100, 100]
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])) // [44, 79, 50, 44, 79, 50]


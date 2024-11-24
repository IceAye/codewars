function permutationShift(permutation) {
    let [max, min] = permutation.reduce((acc, curr, index) => {
        acc[0] = Math.max(acc[0], curr - index);
        acc[1] = Math.min(acc[1], curr - index);
        return acc;
    }, [0, 0])
    return max - min;
}

console.log(permutationShift([1, 0, 2, 3])) // 2
console.log(permutationShift([0, 1, 2, 3, 5, 4])) // 2
console.log(permutationShift([5, 4, 3, 2, 1, 0])) // 10
console.log(permutationShift([0, 1, 2, 3, 4])) // 0

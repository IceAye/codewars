function getLengthOfMissingArray(arrayOfArrays) {
    let len = (arrayOfArrays || []).map(item => item ? item.length : 0).sort((a, b) => a - b);
    for (let i = 0; i < len.length - 1; ++i) {
        if (len[i] === 0) return 0;
        if (len[i] + 1 !== len[i + 1]) return len[i] + 1;
    }
    return 0;
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 3
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) //  2
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )) //  2
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )) //  5
console.log(getLengthOfMissingArray([ ])) //  0
console.log(getLengthOfMissingArray([[0, 2],[4, 4, 2, 4, 1], [2, 1, 4, 2, 4, 4],[2],[2, 2, 4], []])) //  4
console.log(getLengthOfMissingArray(null)) //  0
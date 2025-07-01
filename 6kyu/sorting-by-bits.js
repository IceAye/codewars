function sortByBit(arr) {

    function countNumberOfOne(number) {
        const arrayOfOnes = number.toString(2).match(/1/g);
        if (!arrayOfOnes) return 0;
        return arrayOfOnes.length;
    }

    return arr.sort((a, b) => countNumberOfOne(a) - countNumberOfOne(b) || a - b);
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])) // [1, 8, 3, 3, 5, 6, 9, 7])
console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0])) // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56])
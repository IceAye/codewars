function isSortedAndHow(array) {
    if (array.length === 2) {
        if (array[0] < array[1]) return "yes, ascending";
        return "yes, descending";
    }
    if (array[1] > array[2] && array[1] < array[0]) return "yes, descending";
    if (array[0] < array[1] && array[1] < array[2]) return "yes, ascending";
    return "no";
}

console.log(isSortedAndHow([1, 2, 3]));
console.log(isSortedAndHow([3, 2, 1]));
console.log(isSortedAndHow([1, 3, 2]));
console.log(isSortedAndHow([1, 3]));

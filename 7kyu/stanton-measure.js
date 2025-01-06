// ❓ DESCRIPTION:
// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array.
// Let this count be n. The Stanton measure is the number of times that n appears in the array.
// Write a function which takes an integer array and returns its Stanton measure.
//
// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
//
// ✅ SOLUTION 1:
function stantonMeasure(a) {
    let map = new Map();
    for (const number of a) {
        map.set(number, map.get(number) + 1 || 1);
    }
    return map.get(map.get(1)) || 0;
}

// ✅ SOLUTION 2:
function stantonMeasure(a) {
    function sum(n) {
        return a.filter((x) => x === n).length;
    }

    return sum(sum(1));
}

// 📌 TESTCASE:
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3
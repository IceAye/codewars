// ❓ DESCRIPTION:
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
//
// ✅ SOLUTION:
function averageLength(array) {
    let avr = Math.round(array.reduce((acc, curr) => acc + curr.length, 0) / array.length);
    return array.map((item) => [...new Set(item)].join("").repeat(avr));
}

// 📌 TESTCASE:
console.log(averageLength(["u", "y"])); // ['u', 'y']
console.log(averageLength(["aa", "bbb", "cccc"])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(["aa", "bb", "ddd", "eee"])); // ['aaa', 'bbb', 'ddd', 'eee']
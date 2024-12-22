// ❓ DESCRIPTION:
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL),
// multiplied by the integer at the last index.  Indices in sequence start from 0.  If the sequence is empty, you
// should return 0.
//
// ✅ SOLUTION:
function evenLast(numbers) {
    return numbers.reduce((acc , curr , ind) => {
        if (ind % 2 === 0) acc += curr * numbers.at(-1);
        return acc;
    } , 0)
}

// 📌 TESTCASE:
console.log(evenLast([2 , 3 , 4 , 5])) // 30
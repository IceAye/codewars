// ❓ DESCRIPTION:
// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make
// the values of the array consecutive from the lowest number to the highest number.
//
// ✅ SOLUTION:
function consecutive(array) {
    let count = 0;
    array.sort((a , b) => a - b);
    for (let i = array[0] + 1; i < array[array.length - 1]; i++) {
        if (!array.includes(i)) count++;
    }
    return count;
}

// 📌 TESTCASE:
console.log(consecutive([4 , 8 , 6])) // 2
console.log(consecutive([1 , 2 , 3 , 4])) // 0
console.log(consecutive([])) // 0
console.log(consecutive([1])) // 0
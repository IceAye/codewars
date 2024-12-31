// ❓ DESCRIPTION:
// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.
// Note: Both arrays have the same dimensions.
//
// ✅ SOLUTION 1:
function getLargerNumbers(a , b) {
    let result = [];

    let i = 0;
    while (i < a.length) {
        let max = Math.max(a[i] , b[i]);
        result.push(max);
        i++;
    }
    return result;
}

// ✅ SOLUTION 2:
function getLargerNumbers(a , b) {
    return a.map((number , index) => Math.max(number , b[index]))
}

// 📌 TESTCASE:
console.log(getLargerNumbers([13 , 64 , 15 , 17 , 88] , [23 , 14 , 53 , 17 , 80])); // [23, 64, 53, 17, 88]
console.log(getLargerNumbers([34 , -64 , 15 , 17 , 88] , [23 , 14 , 53 , 17 , 80])); // [34, 14, 53, 17, 88]
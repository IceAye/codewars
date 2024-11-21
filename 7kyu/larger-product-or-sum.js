// ❓ DESCRIPTION:
// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.
// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"
// Note The array will never be empty and n will always be smaller than the length of the array.
//
// ✅ SOLUTION:
function sumOrProduct(array, n) {
    let sorted = array.sort((a, b) => a - b);
    let sum = array.slice(-n).reduce((acc, curr) => acc + curr, 0);
    let prod = array.slice(0, n).reduce((acc, curr) => acc * curr);
    return sum > prod ? "sum" : sum < prod ? "product" : "same";
}

// 📌 TESTCASE:
console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)) // "sum"
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)) // "product"
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3)) // "same"
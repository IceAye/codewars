// ❓ DESCRIPTION:
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
//
// ✅ SOLUTION:
function multiples(m, n){
    let result = [];
    let i = 1;
    while (i <= m) {
        result.push(n * i);
        i++;
    }
    return result;
}

// 📌 TESTCASE:
console.log(multiples(3, 5)) // [5, 10, 15]
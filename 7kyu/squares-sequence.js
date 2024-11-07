// ❓ DESCRIPTION:
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
//
// ✅ SOLUTION:
function squares(x, n) {
    if (n <= 0) return [];
    let result = [x];
    let i = 1;
    while (i < n) {
        x = Math.pow(x, 2);
        result.push(x);
        i++;
    }
    return result;
}

// 📌 TESTCASE:
console.log(squares(2,5)) // [2,4,16,256,65536]
console.log(squares(3,3)) // [3,9,81]
console.log(squares(5,3)) // [5,25,625]
console.log(squares(10,4)) // [10,100,10000,100000000]
console.log(squares(2,0)) //  []
console.log(squares(2,-5)) //  []

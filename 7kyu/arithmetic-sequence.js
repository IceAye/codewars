// ❓ DESCRIPTION:
// You're going to write a function that's going to return the value in the nth index of an arithmetic sequence. (That
// is, adding a constant to move to the next element in the "sequence").  The function takes three inputs first,n,c
// where:  first is the first value in the index 0. n is the index of the value we want. c is the constant added
// between each term.
// Remember that first is in the index 0 .. just saying ...
//
// ✅ SOLUTION:
function nthterm(first , n , c) {
    return first + c * n;
}

// 📌 TESTCASE:
console.log(nthterm(1 , 2 , 3)) // 7
console.log(nthterm(2 , 2 , 2)) // 6
console.log(nthterm(-50 , 10 , 20)) // 150
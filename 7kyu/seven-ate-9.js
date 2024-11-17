// ❓ DESCRIPTION:
// Write a function that removes every lone 9 that is inbetween 7s.
//
// ✅ SOLUTION:
function sevenAte9(str) {
    return str.replace(/79(?=7)/g, "7");
}

// 📌 TESTCASE:
console.log(sevenAte9('797')) //  '77'
console.log(sevenAte9('7979797')) // '7777'
console.log(sevenAte9('165561786121789797')) // '16556178612178977'
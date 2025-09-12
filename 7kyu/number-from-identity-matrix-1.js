// ❓ DESCRIPTION:
// Given the size n of an identity matrix (I), find the number represented by the identity matrix values as its bits.

// 📌 SOLUTION:
function solve(n) {
    const number = [];
    for (let i = 0; i < n; i++) {
        const array = new Array(n).fill(0);
        array[i] = 1;
        number.push(array.join(''));
    }
    return BigInt('0b' + number.join(''));
}

// ✅ TESTCASE:
console.log(solve(2), 9n);
console.log(solve(4), 33825n);
// ❓ DESCRIPTION:
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
// Result should be separated by comma and space.
//
// ✅ SOLUTION 1:
function geometricSequenceElements(a, r, n) {
    let result = [];
    let i = 0;
    while (i < n) {
        result.push(a);
        a *= r;
        i++;
    }
    return result.join(", ");
}

// ✅ SOLUTION 2:
function geometricSequenceElements(a , r , n) {
    return [...Array(n)].map((_ , i) => a * r ** i).join(', ')
}

// 📌 TESTCASE:
console.log(geometricSequenceElements(2, 3, 5)) // '2, 6, 18, 54, 162'
console.log(geometricSequenceElements(2, 2, 10)) // '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'
console.log(geometricSequenceElements(1, -2, 10)) // '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'
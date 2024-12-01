// ❓ DESCRIPTION:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
//
// ✅ SOLUTION:
function pattern(n){
    if (n < 0) return '';
    let output = '';
    let i = 1;
    while (i < n) {
        output += `${i}`.repeat(i) + '\n';
        i++;
    }
    return output + `${n}`.repeat(n);
}

// 📌 TESTCASE:
console.log(pattern(1))  // "1"
console.log(pattern(2))  // "1\n22"
console.log(pattern(5))  // "1\n22\n333\n4444\n55555"
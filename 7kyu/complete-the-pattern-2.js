// ❓ DESCRIPTION:
// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of
// rows.
// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note: If n < 1 then it should return "" i.e. empty string. There are no whitespaces in the pattern.
//
// ✅ SOLUTION:
function pattern(n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        let j = n;
        if (i > 0) output += "\n";
        while (j > i) {
            output += j.toString();
            j--;
        }
    }
    return output;
}

// 📌 TESTCASE:
console.log(pattern(1)); // "1"
console.log(pattern(2)); // "21\n2"
console.log(pattern(5)); // "54321\n5432\n543\n54\n5"
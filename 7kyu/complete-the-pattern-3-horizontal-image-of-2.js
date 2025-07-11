// ❓ DESCRIPTION:
// You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
//
// Pattern:
// (n)
// (n)(n-1)
// (n)(n-1)(n-2)
// ................
// .................
// (n)(n-1)(n-2)....4
// (n)(n-1)(n-2)....43
// (n)(n-1)(n-2)....432
// (n)(n-1)(n-2)....4321

// ✅ SOLUTION 1:
function pattern(n) {
    const output = [];

    for (let i = 1; i <= n; i++) {
        let current = n;
        let string = "";
        let j = 0;

        while (j < i) {
            string += current;
            current--;
            j++;
        }

        output.push(string);
    }

    return output.join("\n");
}

// ✅ SOLUTION 2:
function pattern(n) {
    const output = [];

    let string = '';
    for (let i = n; i > 0; i--) {
        string += i;
        output.push(string);
    }

    return output.join("\n");
}

// 📌 TESTCASE:
console.log(pattern(1)); // "1");
console.log(pattern(2)); // "2\n21");
console.log(pattern(5)); // "5\n54\n543\n5432\n54321");

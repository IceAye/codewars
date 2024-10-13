// ❓ DESCRIPTION:
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
//
// ✅ SOLUTION:
function diamond(n){
    if (n <= 0 || n % 2 === 0) return null;
    if (n === 1) return "*\n"
    let line = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) line += " ".repeat((n - i)/2) + "*".repeat(i) + "\n";
    }
    return line + line.split("\n").reverse().slice(2).join("\n") + "\n"
}

// 📌 TESTCASE:
console.log(diamond(5));
console.log(diamond(3));
console.log(diamond(2));
console.log(diamond(0));
console.log(diamond(-3));
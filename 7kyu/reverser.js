// ❓ DESCRIPTION:
// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.
//
//✅ SOLUTION:
function reverse(n) {
    let result = 0;
    for (let i = n; i >= 1; i = Math.floor(i / 10)) {
        result = result * 10 + (i % 10);
    }
    return result;
}

// 📌 TESTCASE:
console.log(reverse(1234)); // 4321
console.log(reverse(10987)); // 78901
console.log(reverse(1020)); // 201
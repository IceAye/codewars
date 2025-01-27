// ❓ DESCRIPTION:
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.
//
// ✅ SOLUTION:
function powerOf4(n) {
    if (typeof n === "number") {
        return n >= 1 ? Number.isInteger(Math.log(n) / Math.log(4)) : false;
    }
    return false;
}

// 📌 TESTCASE:
console.log(powerOf4(4)); // true
console.log(powerOf4(16)); // true
console.log(powerOf4(1)); // true
console.log(powerOf4(8)); // false
console.log(powerOf4(20)); // false
console.log(powerOf4(32)); // false
console.log(powerOf4(44)); // false
console.log(powerOf4(3.1415)); // false
console.log(powerOf4("1")); // false
console.log(powerOf4("4")); // false
console.log(powerOf4(null)); // false
console.log(powerOf4(undefined)); // false
console.log(powerOf4(function () {})); // false

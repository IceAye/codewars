// ❓ DESCRIPTION:
// Create a function add(n)/Add(n) which returns a function that always adds n to any number
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.
//
// ✅ SOLUTION:
function add(n) {
    return (x) => {
        return n + x;
    }
}

// 📌 TESTCASE:
console.log(add(1)(3)) // 4
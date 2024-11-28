// ❓ DESCRIPTION:
// Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)
// The upper limit for A and B is 216, int.MaxValue or similar.
//
// ✅ SOLUTION:
function convertBits(a, b){
    return (a ^ b).toString(2).replace(/0/g, "").length;
}

// 📌 TESTCASE:
console.log(convertBits(31,14)) // 2
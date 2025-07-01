// ❓ DESCRIPTION:
// space characters). For example aa, !! or   .
//
// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.
//
// ✅ SOLUTION:
function doubleCheck(str){
    return /(.)\1/ig.test(str);
}

// 📌 TESTCASE:
console.log(doubleCheck("abca"), false);
console.log(doubleCheck("aabc"), true);
console.log(doubleCheck("a 11 c d"), true);
console.log(doubleCheck("AabBcC"), true);
console.log(doubleCheck("a b  c"), true);
console.log(doubleCheck("a b c d e f g h i h k"), false);
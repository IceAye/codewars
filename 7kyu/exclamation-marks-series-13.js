// ❓ DESCRIPTION:
// Count the number of exclamation marks and question marks, return the product.
//
// ✅ SOLUTION 1:
function product(string) {
    let exlamationsCount = 0;
    let questionsCount = 0;

    for (const char of string) {
        if (char === "!") exlamationsCount++;
        if (char === "?") questionsCount++;
    }

    return exlamationsCount * questionsCount;
}

// ✅ SOLUTION 2:
function product(string) {
    let exlamationsCount = string.split("!").length - 1;
    let questionsCount = string.split("?").length - 1;

    return exlamationsCount * questionsCount;
}

// ✅ SOLUTION 3:
function product(string) {
    return (string.match(/!/g) || []).length * (string.match(/\?/g) || []).length;
}

// 📌 TESTCASE:
console.log(product("")); // 0
console.log(product("!")); // 0
console.log(product("!!")); // 0
console.log(product("!??")); // 2
console.log(product("!???")); // 3
console.log(product("!!!??")); // 6
console.log(product("!!!???")); // 9
console.log(product("!???!!")); // 9
console.log(product("!ab? ?")); // 2
console.log(product("!????!!!?")); // 20
// ❓ DESCRIPTION:
// Input
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// a boolean true if all rotations of strng are included in arr
// false otherwise
//
// ✅ SOLUTION 1:
function containAllRots(strng, arr) {
    if (strng === "") return true;
    let rotation = [strng];
    for (let i = 1; i < strng.length; i++) {
        rotation.push(strng.slice(i) + strng.slice(0, i))
    }
    return rotation.every(item => arr.includes(item));
}

// ✅ SOLUTION 2:
function containAllRots(strng, arr) {
    for (let i = 0; i < strng.length; i++) {
        if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
            return false;
        }
    }
    return true;
}

// 📌 TESTCASE:
console.log(containAllRots("", [])) // true
console.log(containAllRots("", ["bsjq", "qbsj"])) // true
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])) // true
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])) // false
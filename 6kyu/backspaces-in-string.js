// ❓ DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
//
// ✅ SOLUTION:
function cleanString(s) {
    return [...s].reduce((acc, curr) => {
        curr === "#" ? acc.pop() : acc.push(curr);
        return acc;
    }, []).join("");
}

// 📌 TESTCASE:
console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));
console.log(cleanString(""));
console.log(cleanString("#######"));

// ❓ DESCRIPTION:
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid
// spacing. The function should return either true or false (or the corresponding value in each language).  For this
// kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be
// any consecutive sequence of non space characters.
//
// ✅ SOLUTION:
function validSpacing(s) {
    return s.replace(/\s+/g , " ").trim() === s;
}

// 📌 TESTCASE:
console.log(validSpacing('Hello world')) // true
console.log(validSpacing(' Hello world')) // false
console.log(validSpacing('Hello  world ')) // false
console.log(validSpacing('Hello')) // true
console.log(validSpacing('Helloworld')) // true
console.log(validSpacing('Hello  world')) // false
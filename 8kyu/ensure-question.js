// ❓ DESCRIPTION:
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
//
// ✅ SOLUTION:
function ensureQuestion(s) {
    return s.endsWith("?") ? s : s + "?";
}

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
console.log(ensureQuestion(""));

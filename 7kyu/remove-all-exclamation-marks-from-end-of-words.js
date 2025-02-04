// ❓ DESCRIPTION:
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
//
// ✅ SOLUTION:
function remove (string) {
    return string.split(' ').map(str => str.replace(/!+$/g, '')).join(' ');
}

// 📌 TESTCASE:
console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("Hi! Hi!")) // "Hi Hi"
console.log(remove("!!!Hi !!hi!!! !hi")) // "!!!Hi !!hi !hi"
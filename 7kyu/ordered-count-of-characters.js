// ❓ DESCRIPTION:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// ✅ SOLUTION:
const orderedCount = function (text) {
    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        map.set(text[i], map.get(text[i]) + 1 || 1)
    }
    return [...map.entries()];
}

// 📌 TESTCASE:
console.log(orderedCount("abracadabra"))
console.log(orderedCount("Code Wars"))
console.log(orderedCount("233312"))
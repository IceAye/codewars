// ❓ DESCRIPTION:
// Sort the given array of strings in alphabetical order, case insensitive.
//
// ✅ SOLUTION:
function sortme(names){
    return names.sort((a, b) => (a.toUpperCase()).localeCompare(b.toUpperCase()));
}

// 📌 TESTCASE:
console.log(sortme(["Hello","there","I'm","fine"])) // ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])) // ["a", "B", "C", "d"]
console.log(sortme(["CodeWars"])) // ["CodeWars"]
console.log(sortme([])) // []
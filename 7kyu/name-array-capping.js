// ❓ DESCRIPTION:
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
//
// ✅ SOLUTION:
function capMe(names) {
    return names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
}

// 📌 TESTCASE:
console.log(capMe(['jo' , 'nelson' , 'jurie'])) // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY' , 'DANIEL' , 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']
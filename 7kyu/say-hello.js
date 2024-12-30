// ❓ DESCRIPTION:
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
//
// ✅ SOLUTION:
function greet(name) {
    return name ? `hello ${name}!` : null
}

// 📌 TESTCASE:
console.log(greet("Niks")) // "hello Niks!"
console.log(greet(null)) // null

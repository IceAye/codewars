// ❓ DESCRIPTION:
// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.
//
// All ASCII characters have their numerical order in table.
//
// For example,
// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// ✅ SOLUTION 1:
function convert(number){
    return number.replace(/(..)/g, c => String.fromCharCode(+c));
}

// ✅ SOLUTION 2:
function convert(number){
    return String.fromCharCode(...number.match(/\d{2}/g));
}

// 📌 TESTCASE:
console.log(convert("65"),"A")
console.log(convert("656667"),"ABC")
console.log(convert("676584"),"CAT")
console.log(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE")
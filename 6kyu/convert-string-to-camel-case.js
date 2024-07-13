// ❓ DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
// ✅ SOLUTION:
function toCamelCase( str ) {
    let arr = str.replaceAll('_' , '-').split('-')
    let result = ''
    for (let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr[0] + result
}

console.log('Output: ' , toCamelCase("the_stealth_warrior"))
console.log('Output: ' , toCamelCase("i-am-a-programmer"))
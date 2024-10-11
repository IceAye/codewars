// ❓ DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// ✅ SOLUTION:
function between( a , b ) {
    let array = [];
    let i = a;
    while (i <= b) {
        array.push(i);
        i++
    }
    return array;
}
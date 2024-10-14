// ❓ DESCRIPTION:
// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
// You will be given two dimensions
// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.
//
// ✅ SOLUTION:
function sqInRect(lng, wdth) {
    if (lng === wdth) return null;
    let result = [];
    while (lng > 0 && wdth > 0) {
        result.push(lng > wdth ? wdth : lng);
        lng > wdth ? (lng -= wdth) : (wdth -= lng);
    }
    return result;
}

// 📌 TESTCASE:
console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(3, 5));
console.log(sqInRect(20, 14));

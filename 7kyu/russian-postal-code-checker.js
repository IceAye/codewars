// ❓ DESCRIPTION:
// You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.
// A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.
// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9
//
// ✅ SOLUTION:
function zipvalidate(postcode){
    return /^[12346]\d{5}$/.test(postcode);
}

// 📌 TESTCASE:
console.log(zipvalidate( '198328' ))
console.log(zipvalidate( '310003' ))
console.log(zipvalidate( '424000' ))
console.log(zipvalidate( '12A483' ))
console.log(zipvalidate( '1@63' ))
console.log(zipvalidate( '111' ))
console.log(zipvalidate( '056879' ))
console.log(zipvalidate( '1111111' ))
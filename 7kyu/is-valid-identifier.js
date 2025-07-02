// ❓ DESCRIPTION:
// Here is the syntax for valid identifiers:
// Each identifier must have at least one character.
// The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
// The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
// Examples of valid identifiers:
// i
// wo_rd
// b2h
//
// Examples of invalid identifiers:
// 1i
// wo rd
// !b2h
//
// ✅ SOLUTION:
function isValid(idn) {
    return /^[a-z_$](?=[a-z0-9_$]+$)/ig.test(idn);
}

// 📌 TESTCASE:
console.log(isValid("okay_ok1"), true)
console.log(isValid("$ok"), true)
console.log(isValid("___"), true)
console.log(isValid("str_STR"), true)
console.log(isValid("myIdentf"), true)
console.log(isValid("1ok0okay"), false)
console.log(isValid("!Ok"), false)
console.log(isValid(""), false)
console.log(isValid("str-str"), false)
console.log(isValid("no no"), false)

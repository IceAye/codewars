// ❓ DESCRIPTION:
// Your job is to create a simple password validation function, as seen on many websites.
//
// The rules for a valid password are as follows:
// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.
//
// ✅ SOLUTION 1:
function password(str) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str)
}

// ✅ SOLUTION 2:
function password(str) {
    return str.length >= 8 &&
        /[a-z]/.test(str) &&
        /[A-Z]/.test(str) &&
        /\d/.test(str);
}

// 📌 TESTCASE:
console.log(password("Abcd1234")) //  true
console.log(password("Abcd123")) //  false
console.log(password("abcd1234")) //  false
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")) //  true
console.log(password("ABCD1234")) //  false
console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")) //  true
console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")) //  false
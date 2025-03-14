// ❓ DESCRIPTION:
// Congratulations! That Special Someone has given you their phone number.
//
// But WAIT, is it a valid number?
//
// Your task is to write a function that verifies whether a given string contains a valid British mobile (cell) phone number or not.
//
// If the string is a valid UK number, return "In with a chance".
//
// If it is invalid, or if you're given an empty string, return "Plenty more fish in the sea".
//
// A number can be valid in the following ways:
//
// Here in the UK, mobile numbers begin with "07" followed by 9 other digits, e.g. "07454876120".
//
// Sometimes the number is preceded by the country code, the prefix "+44", which replaces the "0" in ‘07’, e.g. "+447454876120".
//
// And sometimes you will find numbers with dashes in-between digits or on either side, e.g. "+44--745---487-6120" or "-074-54-87-61-20-". As you can see, dashes may be consecutive.
//
// Good Luck Romeo/Juliette!
//
// ✅ SOLUTION 1:
function validateNumber(str) {
    str = str.replace(/-/g, "");
    return (str.startsWith("07") && str.length === 11) ||
    (str.startsWith("+447") && str.length === 13)
        ? "In with a chance"
        : "Plenty more fish in the sea";
}

// ✅ SOLUTION 2:
function validateNumber(str) {
    return /^(\+44|0)7\d{9}$/g.test(str.replace(/-/g, ""))
        ? "In with a chance"
        : "Plenty more fish in the sea";
}

// 📌 TESTCASE:
console.log(validateNumber("07454876120")); // 'In with a chance'
console.log(validateNumber("0754876120")); // 'Plenty more fish in the sea'
console.log(validateNumber("0745-487-61-20")); // 'In with a chance'
console.log(validateNumber("+447535514555")); // 'In with a chance'
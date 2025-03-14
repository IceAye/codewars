function validateNumber(str) {
    str = str.replace(/-/g, "");
    return (str.startsWith("07") && str.length === 11) ||
    (str.startsWith("+447") && str.length === 13)
        ? "In with a chance"
        : "Plenty more fish in the sea";
}

console.log(validateNumber("07454876120")); // 'In with a chance'
console.log(validateNumber("0754876120")); // 'Plenty more fish in the sea'
console.log(validateNumber("0745-487-61-20")); // 'In with a chance'
console.log(validateNumber("+447535514555")); // 'In with a chance'
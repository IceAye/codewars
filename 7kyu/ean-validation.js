function validateEAN(eanCode) {
    let sum = 0;
    for (let i = 0; i < eanCode.length - 1; i++) {
        sum += i % 2 === 0 ? +eanCode[i] : +eanCode[i] * 3;
    }
    let checksum = 0;
    let lastDigitOfNumber = +eanCode[eanCode.length - 1];
    if (sum % 10 !== 0) {
        checksum = 10 - (sum % 10);
    }
    return checksum === lastDigitOfNumber;
}

console.log(validateEAN("9783815820865"), true, "Check EAN-Code \"9783815820865\"");
console.log(validateEAN("9783815820864"), false, "Check EAN-Code \"9783815820864\"");
console.log(validateEAN("9783827317100"), true, "Check EAN-Code \"9783827317100\"");
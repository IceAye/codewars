function isItANum(str) {
    let phoneNumber = str.replace(/\D/gi, "");
    return phoneNumber.startsWith("0") && phoneNumber.length === 11 ? phoneNumber : "Not a phone number";
}

function isItANum(str) {
    let phoneNumber = str.replace(/\D/gi, "");
    return /^0\d{10}$/.test(phoneNumber) ? phoneNumber : "Not a phone number";
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)")); // "02078834982"
console.log(isItANum("sjfniebienvr12312312312ehfWh")); // "Not a phone number"
console.log(isItANum("0192387415456")); // "Not a phone number"
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165")); // "02084564165"
console.log(isItANum("stop calling me no I have never been in an accident")); // "Not a phone number"
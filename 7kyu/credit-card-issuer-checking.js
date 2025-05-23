// ❓ DESCRIPTION:
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card
// number. If the number cannot be matched then the function should return the string Unknown.
//
// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
//
// ✅ SOLUTION 1:
function getIssuer(number) {
    let card = String(number);

    if (card.length === 16) {
        if (card.startsWith("6011")) return "Discover";
        if (
            card.startsWith("51") ||
            card.startsWith("52") ||
            card.startsWith("53") ||
            card.startsWith("54") ||
            card.startsWith("55")
        )
            return "Mastercard";
        if (card.startsWith("4")) return "VISA";
    } else if (card.length === 15) {
        if (card.startsWith("34") || card.startsWith("37")) return "AMEX";
    } else if (card.length === 13 && card.startsWith("4")) return "VISA";
    return "Unknown";
}

// ✅ SOLUTION 2:
function getIssuer(number) {
    let card = String(number);
    if (/^3[4|7]\d{13}$/.test(card)) return "AMEX";
    if (/^6011\d{12}$/.test(card)) return "Discover";
    if (/^5[1-5]\d{14}$/.test(card)) return "Mastercard";
    if (/^4(\d{12}|\d{15})$/.test(card)) return "VISA";
    return "Unknown";
}

// 📌 TESTCASE:
console.log(getIssuer(4111111111111111)); // "VISA"
console.log(getIssuer(4111111111111)); // "VISA"
console.log(getIssuer(4012888888881881)); // "VISA"
console.log(getIssuer(378282246310005)); // "AMEX"
console.log(getIssuer(6011111111111117)); // "Discover"
console.log(getIssuer(5105105105105100)); // "Mastercard"
console.log(getIssuer(5105105105105106)); // "Mastercard"
console.log(getIssuer(9111111111111111)); // "Unknown"
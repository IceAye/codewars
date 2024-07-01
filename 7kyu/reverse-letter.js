/* ❓ DESCRIPTION:
Given a string str, reverse it and omit all non-alphabetic characters.

📌 EXAMPLES:
Input = "krishan" Output = "nahsirk"
Input = "ultr53o?n" Output = "nortlu"

✅ SOLUTION: */
function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('');
}
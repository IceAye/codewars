// ❓ DESCRIPTION:
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.
//
// ✅ SOLUTION:
function whatNumberIsIt(n) {
    switch (true) {
        case (n == Number.MAX_VALUE):
            return "Input number is Number.MAX_VALUE";
        case (n == Number.POSITIVE_INFINITY):
            return "Input number is Number.POSITIVE_INFINITY";
        case (n == Number.MIN_VALUE):
            return "Input number is Number.MIN_VALUE";
        case (n == Number.NEGATIVE_INFINITY):
            return "Input number is Number.NEGATIVE_INFINITY";
        case (isNaN(n)):
            return "Input number is Number.NaN";
        default:
            return "Input number is " + n;
    }
}
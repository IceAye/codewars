// ❓ DESCRIPTION:
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
//
// ✅ SOLUTION:
String.prototype.digit = function() {
    return /^\d$/.test(this)
}
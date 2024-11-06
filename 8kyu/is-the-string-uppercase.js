// ❓ DESCRIPTION:
// Create a method to see whether the string is ALL CAPS.
//
// ✅ SOLUTION:
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
}
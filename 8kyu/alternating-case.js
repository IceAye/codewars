// ❓ DESCRIPTION:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
//
// ✅ SOLUTION:
String.prototype.toAlternatingCase = function () {
    let word = [];
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) === this.charAt(i).toUpperCase()) {
            word.push(this.charAt(i).toLowerCase());
        } else if (this.charAt(i) === this.charAt(i).toLowerCase()) {
            word.push(this.charAt(i).toUpperCase());
        }
    }
    return word.join('');
}
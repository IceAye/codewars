// ❓ DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.
//
// ✅ SOLUTION 1:
function validParentheses(parenStr) {
    let stack = [];
    for (const parent of parenStr) {
        if (parent === '(') {
            stack.push('(')
        } else if (stack.length > 0) {
            stack.pop();
        } else if (stack.length === 0 && parent === ')') {
            return false
        }
    }
    return stack.length === 0
}

// ✅ SOLUTION 2:
function validParentheses(parenStr) {
    let sum = 0;
    for (const paren of parenStr) {
        paren === '(' ? sum++ : sum--;
        if (sum < 0) return false;
    }
    return sum === 0;
}

// 📌 TESTCASE:
console.log(validParentheses("()")); // true
console.log(validParentheses("((()))")); //  true,
console.log(validParentheses("()()()")); // true
console.log(validParentheses("(()())()")); // true
console.log(validParentheses("()(())((()))(())()")); // true
console.log(validParentheses(")(")); // false
console.log(validParentheses("()()(")); // false
console.log(validParentheses("((())")); // false
console.log(validParentheses("())(()")); // false
console.log(validParentheses(")()")); // false
console.log(validParentheses(")")); // false
console.log(validParentheses("")); // true
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

function validParentheses(parenStr) {
    let sum = 0;
    for (const paren of parenStr) {
        paren === '(' ? sum++ : sum--;
        if (sum < 0) return false;
    }
    return sum === 0;
}

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
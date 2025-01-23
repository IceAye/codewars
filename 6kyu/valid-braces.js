function validBraces(braces){
    let bracesObj = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stack = [];

    for (let i = 0; i < braces.length; i++) {
        if (bracesObj[braces[i]] === undefined || bracesObj[braces[i]] !== stack[stack.length - 1]) {
            stack.push(braces[i])
        } else {
            stack.pop()
        }
    }
    return stack.length === 0;
}

console.log(validBraces("()))")) // false
console.log(validBraces("()")) //true
console.log(validBraces("[]")) // true
console.log(validBraces("{}")) // true
console.log(validBraces("(){}[]")) // true
console.log(validBraces("([{}])")) // true
console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false
console.log(validBraces("({})[({})]")) // true
console.log(validBraces("(})")) // false
console.log(validBraces("(({{[[]]}}))")) // true
console.log(validBraces("{}({})[]")) // true
console.log(validBraces(")(}{][")) // false
console.log(validBraces("())({}}{()][][")) // false
console.log(validBraces("(((({{")) // false
console.log(validBraces("}}]]))}])")) // false
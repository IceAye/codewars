// ❓ DESCRIPTION:
// You will be given a number and you will need to return it as a string in Expanded Form.
//
// NOTE: All numbers will be whole numbers greater than 0.
//
// ✅ SOLUTION:
function expandedForm(num) {
    let answer = [];
    let i = 10;
    while (num > 0) {
        if (num % i > 0) {
            answer.push(num % i);
            num -= num % i;
        }
        i *= 10;
    }
    return answer.reverse().join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(125));
console.log(expandedForm(1257));
console.log(expandedForm(70304));

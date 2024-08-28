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
console.log(expandedForm(22));
console.log(expandedForm(125));
console.log(expandedForm(1257));
console.log(expandedForm(70304));

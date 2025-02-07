function isVeryEvenNumber(n) {
    if (n < 10) {
        return n % 2 === 0
    }
    return isVeryEvenNumber(Array.from(n.toString(), Number).reduce((acc, curr) => acc + curr, 0));
}

console.log(isVeryEvenNumber(88)); // false
console.log(isVeryEvenNumber(222)); // true
console.log(isVeryEvenNumber(5)); // false
console.log(isVeryEvenNumber(841)); // true

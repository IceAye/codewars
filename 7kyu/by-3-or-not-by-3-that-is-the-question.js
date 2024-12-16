function divisibleByThree(str) {
    let sumOfDigits = [...str].reduce((acc, curr) => acc + +curr, 0);
    return sumOfDigits % 3 === 0;
}

console.log(divisibleByThree("123")); // true
console.log(divisibleByThree("19254")); // true
console.log(divisibleByThree("88")); // false
console.log(divisibleByThree("1")); // false
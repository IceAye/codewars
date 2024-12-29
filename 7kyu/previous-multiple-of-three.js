const prevMultOfThree = (n) => {
    if (n % 3 === 0) {
        return n;
    } else {
        while (n % 3 !== 0) {
            let dijits = Array.from(n.toString());
            dijits.pop();
            n = +dijits.join("");
        }
    }
    return n || null;
};

console.log(prevMultOfThree(1)); // null
console.log(prevMultOfThree(25)); // null
console.log(prevMultOfThree(36)); // 36
console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(952406)); // 9

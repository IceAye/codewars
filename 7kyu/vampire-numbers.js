function vampireTest(a, b) {
    let prod = (a * b).toString().split("").sort().join("");
    let string = (a.toString() + b.toString()).split("").sort().join("");
    return prod === string;
}

console.log(vampireTest(21,6)) // true
console.log(vampireTest(204,615)) //  true
console.log(vampireTest(30,-51)) //  true
console.log(vampireTest(-246,-510)) //  false
console.log(vampireTest(2947050,8469153)) //  true
console.log(vampireTest(2947051,8469153)) //  false
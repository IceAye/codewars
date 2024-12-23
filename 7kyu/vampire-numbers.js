// ❓ DESCRIPTION:
// Our loose definition of Vampire Numbers can be described as follows:
//
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
//
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
//
// ✅ SOLUTION:
function vampireTest(a, b) {
    let prod = (a * b).toString().split("").sort().join("");
    let string = (a.toString() + b.toString()).split("").sort().join("");
    return prod === string;
}

// 📌 TESTCASE:
console.log(vampireTest(21,6)) // true
console.log(vampireTest(204,615)) //  true
console.log(vampireTest(30,-51)) //  true
console.log(vampireTest(-246,-510)) //  false
console.log(vampireTest(2947050,8469153)) //  true
console.log(vampireTest(2947051,8469153)) //  false
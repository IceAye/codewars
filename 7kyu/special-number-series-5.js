// ❓ DESCRIPTION:
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
// Given a number determine if it special number or not .
//
// ✅ SOLUTION 1:
function specialNumber(n){
    return !/[^0-5]/gi.test(n) ? 'Special!!' : 'NOT!!';
}

// ✅ SOLUTION 2:
function specialNumber(n){
    return /[6-9]/gi.test(n) ? 'NOT!!' : 'Special!!';
}

// 📌 TESTCASE:
console.log(specialNumber(2)) // "Special!!"
console.log(specialNumber(3)) // "Special!!"
console.log(specialNumber(6)) // "NOT!!"
console.log(specialNumber(9)) // "NOT!!"
console.log(specialNumber(11)) // "Special!!"
console.log(specialNumber(55)) // "Special!!"
console.log(specialNumber(26)) // "NOT!!"
console.log(specialNumber(92)) // "NOT!!"
console.log(specialNumber(25432)) // "Special!!"
console.log(specialNumber(2783)) // "NOT!!"
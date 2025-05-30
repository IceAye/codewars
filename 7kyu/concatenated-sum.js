// ❓ DESCRIPTION:
// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.
//
// Examples
// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.
//
// original number=-2997 , n=3
//
// -2997 = -222-999-999-777 and here each digit is concatenated three times.
// Task
// Write a function named checkConcatenatedSum that tests if a number has this generalized property.
//
// ✅ SOLUTION:
function checkConcatenatedSum(number, times) {
    let absolute = Math.abs(number)
    let generalized = [...absolute.toString()].reduce((acc, curr) => acc + +curr.repeat(times), 0);
    return generalized === absolute;
}

// 📌 TESTCASE:
console.log(checkConcatenatedSum(2997,3),true)
console.log(checkConcatenatedSum(-2997,3),true)
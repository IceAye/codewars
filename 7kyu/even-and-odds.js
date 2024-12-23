// ❓ DESCRIPTION:
// This kata is about converting numbers to their binary or hexadecimal representation:
//
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.
//
// ✅ SOLUTION:
function evensAndOdds(num){
    return num % 2 === 0 ? num.toString(2) : num.toString(16);
}

// 📌 TESTCASE:
console.log(evensAndOdds(2)) // '10'
console.log(evensAndOdds(13)) // 'd'
console.log(evensAndOdds(47)) // '2f'
console.log(evensAndOdds(0)) // '0'
console.log(evensAndOdds(12800)) // '11001000000000'
console.log(evensAndOdds(8172381723)) // '1e71ca61b'
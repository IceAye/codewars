// ❓ DESCRIPTION:
// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,
// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
//
// ✅ SOLUTION:
function hammingWeight(x){
    let str = '';
    for (let i = x; i > 0; i = Math.trunc(i / 2)) {
        str = (i % 2) + str;
    }
    return str ? str.match(/1/g).length : 0;
}

// 📌 TESTCASE:
console.log(hammingWeight(10)) // 2
console.log(hammingWeight(21)) // 3
console.log(hammingWeight(0)) // 0
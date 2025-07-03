// ❓ DESCRIPTION:
// Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:
//
// input	NE	NO
// 126453	264	153
// 3012	2	31
// 4628	4628	0
// 0 is considered as an even number.
//
// In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.

// ✅ SOLUTION:
function evenAndOdd(num) {
    let NE = "";
    let NO = "";
    for (const digit of num.toString()) {
        if (+digit % 2 === 0) {
            NE += digit;
        } else NO += digit;
    }

    return [+NE, +NO];
}
// 📌 TESTCASE:
console.log(evenAndOdd(126453), [264, 153], `For input 126453`);
console.log(evenAndOdd(3012), [2, 31], `For input 3012`);
console.log(evenAndOdd(4628), [4628, 0], `For input 4628`);
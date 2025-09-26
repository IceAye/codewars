// ❓ DESCRIPTION:
// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
// If the input is 0 or negative value, then you should return "00:00"
// Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

// ✅ SOLUTION:
function timeConvert(num) {
    if (num <= 0) return '00:00';
    const hours = Math.floor(num / 60).toString().padStart(2, '0');
    const min = (num % 60).toString().padStart(2, '0');
    return `${hours}:${min}`;
}

// 📌 TESTCASE:
console.log(timeConvert(0), "00:00");
console.log(timeConvert(-6), "00:00");
console.log(timeConvert(8), '0'+0+':'+'0'+8);
console.log(timeConvert(32), '0'+0+':'+32);
console.log(timeConvert(75), '0'+1+':'+15);
console.log(timeConvert(63), '0'+1+':'+'0'+3);
console.log(timeConvert(134), '0'+2+':'+14);
console.log(timeConvert(180), '0'+3+':'+'0'+0);
console.log(timeConvert(970), 16+':'+10);
console.log(timeConvert(565757), 9429+':'+17);
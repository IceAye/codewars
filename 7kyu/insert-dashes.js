// ❓ DESCRIPTION:
// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.
//
// ✅ SOLUTION 1:
function insertDash(num) {
    let result = '';
    let array = num.toString();
    for (let i = 0; i < array.length - 1; i++) {
        result += array[i];
        if ((+array[i] % 2 === 1) && (+array[i + 1] % 2 === 1)) {
            result += '-';
        }
    }
    return result + array.at(-1);
}

// ✅ SOLUTION 2:
function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, '$&-');
}

// 📌 ESTCASE:
console.log(insertDash(454793)) // '4547-9-3'
console.log(insertDash(123456)) // '123456'
console.log(insertDash(1003567)) // '1003-567'
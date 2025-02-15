// ❓ DESCRIPTION:
// Your Task
// Complete the function to convert an integer into a string of the Turkish name.
//
// input will always be an integer 0-99;
// output should always be lower case.
// Background
// Forming the Turkish names for the numbers 0-99 is very straightforward:
//
// units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
// all other numbers are simply [tens] + [unit], like twenty one in English.
// Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.
//
// ✅ SOLUTION:
const units = {
    0: 'sıfır',
    1: 'bir',
    2: 'iki',
    3: 'üç',
    4: 'dört',
    5: 'beş',
    6: 'altı',
    7: 'yedi',
    8: 'sekiz',
    9: 'dokuz'
}

const tens = {
    1: 'on',
    2: 'yirmi',
    3: 'otuz',
    4: 'kırk',
    5: 'elli',
    6: 'altmış',
    7: 'yetmiş',
    8: 'seksen',
    9: 'doksan',
}

const getTurkishNumber = (num) => {
    if (num < 10) return units[num];
    let arr = Array.from(num.toString(), Number);
    if (arr[1] === 0) return tens[arr[0]];
    return tens[arr[0]] + ' ' + units[arr[1]];
}

// 📌 TESTCASE:
console.log(getTurkishNumber(0)) //  "sıfır"
console.log(getTurkishNumber(16)) // "on altı"
console.log(getTurkishNumber(70)) // "yetmiş"
console.log(getTurkishNumber(26)) // "yirmi altı"
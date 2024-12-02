// ❓ DESCRIPTION:
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
//
// ✅ SOLUTION 1:
function whatCentury(year) {
    let century = year.endsWith("00") ? +year.slice(0,2) : +year.slice(0,2) + 1
    return century > 3 && century < 21 ? century + 'th'
        : century.toString().endsWith('1') ? century + "st"
            : century.toString().endsWith('2') ? century + 'nd'
                : century.toString().endsWith('3') ? century + 'rd'
                    : century + 'th'
}

// ✅ SOLUTION 2:
function whatCentury(year){
    let century = Math.ceil(year / 100);
    return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

// 📌 TESTCASE:
console.log(whatCentury("1999")) // "20th"
console.log(whatCentury("2011")) // "21st"
console.log(whatCentury("2154")) // "22nd"
console.log(whatCentury("2259")) // "23rd"
console.log(whatCentury("1234")) // "13th"
console.log(whatCentury("1023")) // "11th"
console.log(whatCentury("2000")) // "20th"
console.log(whatCentury("9600")) // "96th"
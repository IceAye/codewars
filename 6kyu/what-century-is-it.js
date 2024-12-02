function whatCentury(year) {
    let century = year.endsWith("00") ? +year.slice(0,2) : +year.slice(0,2) + 1
    return century > 3 && century < 21 ? century + 'th'
        : century.toString().endsWith('1') ? century + "st"
            : century.toString().endsWith('2') ? century + 'nd'
                : century.toString().endsWith('3') ? century + 'rd'
                    : century + 'th'
}

console.log(whatCentury("1999")) // "20th"
console.log(whatCentury("2011")) // "21st"
console.log(whatCentury("2154")) // "22nd"
console.log(whatCentury("2259")) // "23rd"
console.log(whatCentury("1234")) // "13th"
console.log(whatCentury("1023")) // "11th"
console.log(whatCentury("2000")) // "20th"
console.log(whatCentury("9600")) // "20th"
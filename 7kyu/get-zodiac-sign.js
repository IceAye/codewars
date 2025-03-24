// ❓ DESCRIPTION:
// Your task is to get Zodiac Sign using input day and month.
//
// For example:
// getZodiacSign(1,5) => 'Taurus'
// getZodiacSign(10,10) => 'Libra'
// Correct answers are (preloaded):
//
// const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
// P.S. Each argument is correct integer number.
//
// ✅ SOLUTION:
const getZodiacSign = (day, month) => {
    switch(month) {
        case 1:
            return day > 19 ? 'Aquarius' : 'Capricorn'
        case 2:
            return day > 18 ? 'Pisces' : 'Aquarius'
        case 3:
            return day > 20 ? 'Aries' : 'Pisces'
        case 4:
            return day > 19 ? 'Taurus' : 'Aries'
        case 5:
            return day > 20 ? 'Gemini' : 'Taurus'
        case 6:
            return day > 20 ? 'Cancer' : 'Gemini'
        case 7:
            return day > 22 ? 'Leo' : 'Cancer'
        case 8:
            return day > 22 ? 'Virgo' : 'Leo'
        case 9:
            return day > 22 ? 'Libra' : 'Virgo'
        case 10:
            return day > 22 ? 'Scorpio' : 'Libra'
        case 11:
            return day > 21 ? 'Sagittarius' : 'Scorpio'
        case 12:
            return day > 21 ? 'Capricorn' : 'Sagittarius'
    }
}

// 📌 TESTCASE:
console.log(getZodiacSign(10,10)) // 'Libra'
console.log(getZodiacSign(1,5)) // 'Taurus'
console.log(getZodiacSign(6,9)) // 'Virgo'
console.log(getZodiacSign(25,11)) // 'Sagittarius'
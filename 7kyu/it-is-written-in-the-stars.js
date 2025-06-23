function starSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) return 'Aquarius';
    if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) return 'Pisces';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) return 'Aries';
    if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) return 'Taurus';
    if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) return 'Gemini';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) return 'Leo';
    if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) return 'Virgo';
    if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) return 'Libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'Scorpio';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) return 'Capricorn';
}

console.log(starSign(new Date(1970, 5, 5)), "Gemini");
console.log(starSign(new Date(2000, 1, 15)), "Aquarius");
console.log(starSign(new Date(1987, 7, 23)), "Leo");

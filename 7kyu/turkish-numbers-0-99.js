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

console.log(getTurkishNumber(0)) //  "sıfır"
console.log(getTurkishNumber(16)) // "on altı"
console.log(getTurkishNumber(70)) // "yetmiş"
console.log(getTurkishNumber(26)) // "yirmi altı"
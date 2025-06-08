function titleToNumber(title) {
    return [...title].reduce((acc, curr, ind) => acc + (curr.charCodeAt() - 64) * Math.pow(26, title.length - 1 - ind), 0);
}

console.log(titleToNumber('A'),1);
console.log(titleToNumber('Z'),26);
console.log(titleToNumber('AA'),27);
console.log(titleToNumber('AZ'),52);
console.log(titleToNumber('BA'),53);
console.log(titleToNumber('CODEWARS'),28779382963);

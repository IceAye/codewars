function womensAge(n) {
    let base = Math.floor(n / 2);
    let age = n % 2;
    return `${n}? That's just ${20 + age}, in base ${base}!`;
}

console.log(womensAge(32), "32? That's just 20, in base 16!");
console.log(womensAge(39), "39? That's just 21, in base 19!");
console.log(womensAge(22), "22? That's just 20, in base 11!");
console.log(womensAge(65), "65? That's just 21, in base 32!");
console.log(womensAge(83), "83? That's just 21, in base 41!");


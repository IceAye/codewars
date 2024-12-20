numbers = [
    "zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
];

function wallpaper(l, w, h) {
    if (l === 0 || w === 0 || h === 0) return numbers[0];

    let plain = 2 * (w * h) + 2 * (l * h);
    let required = plain * 0.15 + plain;
    let wallpaper = 0.52 * 10;
    let final = Math.ceil(required / wallpaper);
    return numbers[final];
}

console.log(wallpaper(6.3, 4.5, 3.29)) // "sixteen"
console.log(wallpaper(7.8, 2.9, 3.29)) // "sixteen"
console.log(wallpaper(6.3, 5.8, 3.13)) // "seventeen"
console.log(wallpaper(6.1, 6.7, 2.81)) // "sixteen"
console.log(wallpaper(0, 5.6, 3.2)) // "zero"

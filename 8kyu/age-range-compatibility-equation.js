function datingRange(age) {
    let min, max;
    if (age <= 14) {
        min = Math.floor(age - 0.1 * age);
        max = Math.floor(age + 0.1 * age);
    } else {
        min = Math.floor(age / 2 + 7);
        max = Math.floor((age - 7) * 2);
    }
    return `${min}-${max}`;
}

console.log(datingRange(17));
console.log(datingRange(40));
console.log(datingRange(15));
console.log(datingRange(10));

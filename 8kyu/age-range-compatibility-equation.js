// ❓ DESCRIPTION:
// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]
//
// ✅ SOLUTION:

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

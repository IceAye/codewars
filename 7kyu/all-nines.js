// ❓ DESCRIPTION:
// Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.
//
// 📌 EXAMPLES:
// 11 -> 9, because 11 * 9 == 99.
// 12 -> -1, because 12 is even, so no multiple of it can contain only nines.
// 13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines.
//
// NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.
//
// ✅ SOLUTION:
const allNines = (x) => {
    let startNum = 9n;
    if (!(x % 2n) || !(x % 5n)) return -1n;
    while (startNum % x) startNum = startNum * 10n + 9n;
    return startNum / x;
};
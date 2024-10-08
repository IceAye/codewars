// ❓ DESCRIPTION:
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
// Task
// Given a year, return the century it is in.
//
// ✅ SOLUTION:
function century(year) {
    return Math.ceil(year/100);
}

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
function determineTime (durations) {
    return durations.map(duration => duration.split(":")).reduce((acc, curr) => {
        acc += +curr[0]*3600 + +curr[1]*60 + +curr[2];
        return acc;
    }, 0) / (24 * 60 * 60) <= 1
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])) // true
console.log(determineTime([])) // true
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])) // true
console.log(determineTime(["12:00:00", "12:00:00"])) // true
console.log(determineTime(["12:00:00", "12:00:01"])) // false
console.log(determineTime(["06:00:00","12:00:00","06:30:00"])) // false


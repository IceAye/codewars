// ❓ DESCRIPTION:
// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
// But he has only 24 hours left. Can he do it?
// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
//
// ✅ SOLUTION:
function determineTime (durations) {
    return durations.map(duration => duration.split(":")).reduce((acc, curr) => {
        acc += +curr[0]*3600 + +curr[1]*60 + +curr[2];
        return acc;
    }, 0) / (24 * 60 * 60) <= 1
}

// 📌 TESTCASE:
console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])) // true
console.log(determineTime([])) // true
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])) // true
console.log(determineTime(["12:00:00", "12:00:00"])) // true
console.log(determineTime(["12:00:00", "12:00:01"])) // false
console.log(determineTime(["06:00:00","12:00:00","06:30:00"])) // false


// ❓ DESCRIPTION:
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
//
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
//
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.
//
// ✅ SOLUTION:
function race(v1, v2, g) {
    let diff = g / (v2 - v1);
    let hours = Math.floor(diff);
    let minutes =  Math.floor((diff * 60) % 60);
    let seconds = Math.floor((diff * 3600) % 60);
    return v2 > v1 ? [ hours, minutes, seconds ] : null;
}

// 📌 TESTCASE
console.log(race(720, 850, 70)) // [0, 32, 18]
console.log(race(80, 91, 37)) // [3, 21, 49]
console.log(race(80, 100, 40)) // [2, 0, 0]
console.log(race(720, 850, 37)) // [0, 17, 4]
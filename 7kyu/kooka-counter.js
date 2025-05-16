// ❓ DESCRIPTION:
// A family of kookaburras are in my backyard.
// I can't see them all, but I can hear them!
// How many kookaburras are there?
//
// Hint
// The trick to counting kookaburras is to listen carefully
// The males sound like HaHaHa...
// The females sound like hahaha...
// And they always alternate male/female
//
// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3
// ^ Kata Note : No validation is necessary; only valid input will be passed :-)
//
// ✅ SOLUTION:
const kookaCounter = function(laughing) {
    let count = 0;
    let array = laughing.split('a');
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i + 1]) count++;
    }
    return count;
}

// 📌 TESTCASE:
console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);
console.log(kookaCounter("hahahahahaHaHaHa"), 2);
console.log(kookaCounter("HaHaHahahaHaHa"), 3);
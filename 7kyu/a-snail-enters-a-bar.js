// ❓ DESCRIPTION:
// A snail is crawling along a rubber band that has an initial length of x units. The snail moves at a constant speed of y units per minute. As the snail crawls from the left end of the rubber band to the right end, the rubber band increases in length from the right side every minute, adding z units to its length.
//
// The question is: Will the snail be able to reach the right end of the rubber band within 1 year?
//
// ✅ SOLUTION:
function canSnailReachEnd(length, speed, lengthIncreases) {
    if (speed < lengthIncreases) return false;
    let limit = 365 * 24 * 60;
    return length / (speed - lengthIncreases) <= limit;
}

console.log(canSnailReachEnd(10, 2, 1));
console.log(canSnailReachEnd(100, 1, 2));
console.log(canSnailReachEnd(500, 5, 10));
console.log(canSnailReachEnd(10000, 0.1, 1));

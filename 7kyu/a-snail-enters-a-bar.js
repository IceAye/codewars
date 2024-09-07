function canSnailReachEnd(length, speed, lengthIncreases) {
    if (speed < lengthIncreases) return false;
    let limit = 365 * 24 * 60;
    return length / (speed - lengthIncreases) <= limit;
}

console.log(canSnailReachEnd(10, 2, 1));
console.log(canSnailReachEnd(100, 1, 2));
console.log(canSnailReachEnd(500, 5, 10));
console.log(canSnailReachEnd(10000, 0.1, 1));

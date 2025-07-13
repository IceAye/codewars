// ❓ DESCRIPTION:
// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.
//
// Return the direction you will face after the turn.

// ✅ SOLUTION:
function direction(facing, turn) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const targetDirectionIndex = (directions.indexOf(facing) + turn / 45 ) % directions.length;

    return targetDirectionIndex < 0 ? directions[directions.length + targetDirectionIndex] : directions[targetDirectionIndex];
}

// 📌 TESTCASE:
console.log(direction("S", 180), "N");
console.log(direction("SE", -45), "E");
console.log(direction("W", 495), "NE");
console.log(direction("N", -450), "W");

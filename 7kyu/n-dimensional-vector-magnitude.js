// ❓ DESCRIPTION:
// Return the magnitude of a vector, given as an array of its component values.
// The vector (2, 3, 5) would be represented as an array containing three values at indices 0, 1 and 2 respectively.
// The array will always contain at least 2 and at most 100 elements (2 ≤ vector.Length ≤ 100), each of which will be within the range [-100, 100].
// An array containing four elements represents a vector in 4D space.
//
// ✅ SOLUTION 1:
function magnitude(vector) {
    return Math.sqrt(
        vector.reduce((acc, curr) => {
            acc += Math.pow(curr, 2);
            return acc;
        }, 0),
    );
}

// ✅ SOLUTION 2:
function magnitude(vector) {
    return Math.hypot(...vector);
}

var v1 = [0, 0];
console.log(magnitude(v1)) // 0

var v2 = [2 / 3, 1 / 3, 2 / 3];
console.log(magnitude(v2)) // 1

var v3 = [-2, -4, 4];
console.log(magnitude(v3)) // 6
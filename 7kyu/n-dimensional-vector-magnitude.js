function magnitude(vector) {
    return Math.sqrt(
        vector.reduce((acc, curr) => {
            acc += Math.pow(curr, 2);
            return acc;
        }, 0),
    );
}

var v1 = [0, 0];
console.log(magnitude(v1)) // 0

var v2 = [2 / 3, 1 / 3, 2 / 3];
console.log(magnitude(v2)) // 1

var v3 = [-2, -4, 4];
console.log(magnitude(v3)) // 6
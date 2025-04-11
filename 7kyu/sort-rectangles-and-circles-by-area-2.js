// ❓ DESCRIPTION:
// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.
//
// ✅SOLUTION 1:
function sortByArea(array) {
    let result = new Map();

    for (const item of array) {
        typeof item === "object"
            ? result.set(item, item[0] * item[1])
            : result.set(item, Math.PI * item ** 2);
    }

    return [...result.keys()].sort((a, b) => result.get(a) - result.get(b));
}

// ✅ SOLUTION 2:
function sortByArea(array) {

    function getArea(dimensions) {
        return Array.isArray(dimensions) ? dimensions[0] * dimensions[1] : Math.PI * dimensions ** 2;
    }

    return array.sort((a, b) => getArea(a) - getArea(b));
}

// 📌 TESTCASE:
console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
console.log(sortByArea([[2, 5], 6])); // [ [2, 5], 6 ]
console.log(sortByArea([])); // []
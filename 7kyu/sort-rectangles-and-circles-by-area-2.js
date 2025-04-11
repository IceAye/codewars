function sortByArea(array) {
    let result = new Map();

    for (const item of array) {
        typeof item === "object"
            ? result.set(item, item[0] * item[1])
            : result.set(item, Math.PI * item ** 2);
    }

    return [...result.keys()].sort((a, b) => result.get(a) - result.get(b));
}

function sortByArea(array) {

    function getArea(dimensions) {
        return Array.isArray(dimensions) ? dimensions[0] * dimensions[1] : Math.PI * dimensions ** 2;
    }

    return array.sort((a, b) => getArea(a) - getArea(b));
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
console.log(sortByArea([[2, 5], 6])); // [ [2, 5], 6 ]
console.log(sortByArea([])); // []
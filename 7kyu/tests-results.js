function testResult(array) {
    const marksCount = {"h": 0, "a": 0, "l": 0};

    const averageMarkRoundToThree = +(
        array.reduce((acc, curr) => {
            let mark = curr > 8 ? "h" : curr > 6 ? "a" : "l";
            marksCount[mark] += 1;
            acc += curr;
            return acc;
        }, 0) / array.length
    ).toFixed(3);

    const result = [averageMarkRoundToThree, marksCount];

    return marksCount["h"] === array.length ? [...result, "They did well"] : result ;
}

console.log(testResult([10,9,9,10,9,10,9]),[9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']);
console.log(testResult([5,6,4,8,9,8,9,10,10,10]),[7.9, {'h': 5, 'a': 2, 'l': 3}]);
console.log(testResult([5,6,5,7,4,5,6,6,5]),[5.444, {'h': 0, 'a': 1, 'l': 8}]);
console.log(testResult([9,8,7,6,9,8,10,7,6]),[7.778, {'h': 3, 'a': 4, 'l': 2}]);
console.log(testResult([9,10,10,10,10,10,8,9,7,8,10]),[9.182, {'h': 8, 'a': 3, 'l': 0}]);
console.log(testResult([3,5,6,10,8,4,10,9]),[6.875, {'h': 3, 'a': 1, 'l': 4}]);
console.log(testResult([10,9,9,10,9,10]),[9.5, {'h': 6, 'a': 0, 'l': 0}, 'They did well']);
console.log(testResult([7,6,8,9,6,7,5,9]),[7.125, {'h': 2, 'a': 3, 'l': 3}]);
console.log(testResult([9,9,8,9,8,9]),[8.667, {'h': 4, 'a': 2, 'l': 0}]);
console.log(testResult([10,9,6,7,10,8,9,10]),[8.625, {'h': 5, 'a': 2, 'l': 1}]);
function stantonMeasure(a) {
    let map = new Map();
    for (const number of a) {
        map.set(number, map.get(number) + 1 || 1);
    }
    return map.get(map.get(1)) || 0;
}

function stantonMeasure(a) {
    function sum(n) {
        return a.filter((x) => x === n).length;
    }

    return sum(sum(1));
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3
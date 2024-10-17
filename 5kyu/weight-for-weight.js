function orderWeight(strng) {
    let map = new Map();
    let array = strng.trim().split(" ").sort().filter(item => item.length > 0);
    for (const item of array) {
        let itemNumber = [...item].reduce((acc, curr) => acc + +curr, 0);
        map.set(item, map.get(map[item]) + itemNumber || itemNumber);
    }
    return array.sort((a, b) => map.get(a) - map.get(b)).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight("   2000     10003 1234000 "));
console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

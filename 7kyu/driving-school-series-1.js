function passed(list) {
    let passed = list.filter(point => point <= 18);
    return Math.round(passed.reduce((acc, curr) => acc + curr, 0) / passed.length) || 'No pass scores registered.';
}

console.log(passed([10,10,10,18,20,20])) // 12
console.log(passed([21,22,24])) // 'No pass scores registered.'
console.log(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9])) //  10
console.log(passed([19,16,8,11,25,10,29,22,23])) // 11
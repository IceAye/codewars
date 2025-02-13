function averageLength(array) {
    let avr = Math.round(array.reduce((acc, curr) => acc + curr.length, 0) / array.length);
    return array.map((item) => [...new Set(item)].join("").repeat(avr));
}

console.log(averageLength(["u", "y"])); // ['u', 'y']
console.log(averageLength(["aa", "bbb", "cccc"])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(["aa", "bb", "ddd", "eee"])); // ['aaa', 'bbb', 'ddd', 'eee']
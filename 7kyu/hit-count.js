function counterEffect(hitCount) {
    let result = [];
    for (const hit of hitCount) {
        let array = [];
        let i = 0;
        while (i <= +hit) {
            array.push(i);
            i++;
        }
        result.push(array);
    }
    return result;
}

console.log(counterEffect("1250")) // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
console.log(counterEffect("0050")) // [[0],[0],[0,1,2,3,4,5],[0]]
console.log(counterEffect("0000")) // [[0],[0],[0],[0]]

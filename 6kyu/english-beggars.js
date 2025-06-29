function beggars(values, n){
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = i; j < values.length; j += n) {
            result[i] += values[j];
        }
    }
    return result;
}

console.log(beggars([1,2,3,4,5],1), [15]);
console.log(beggars([1,2,3,4,5],2), [9,6]);
console.log(beggars([1,2,3,4,5],3), [5,7,3]);
console.log(beggars([1,2,3,4,5],6), [1,2,3,4,5,0]);
console.log(beggars([1,2,3,4,5],0), []);
function squares(x, n) {
    if (n <= 0) return [];
    let result = [x];
    let i = 1;
    while (i < n) {
        x = Math.pow(x, 2);
        result.push(x);
        i++;
    }
    return result;
}

console.log(squares(2,5)) // [2,4,16,256,65536]
console.log(squares(3,3)) // [3,9,81]
console.log(squares(5,3)) // [5,25,625]
console.log(squares(10,4)) // [10,100,10000,100000000]
console.log(squares(2,0)) //  []
console.log(squares(2,-5)) //  []

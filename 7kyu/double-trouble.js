function trouble(x, t){
    let i = 0;
    while (i < x.length - 1) {
        if (x[i] + x[i + 1] === t) {
            x.splice(i + 1, 1);
        } else i++;
    }
    return x;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3],7), [1, 3, 5, 6, 7, 4]);
console.log(trouble([4, 1, 1, 1, 4],2), [4, 1, 4]);
console.log(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
console.log(trouble([2, 6, 2], 8), [2, 2]);
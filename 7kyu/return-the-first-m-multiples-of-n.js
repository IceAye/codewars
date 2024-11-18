function multiples(m, n){
    let result = [];
    let i = 1;
    while (i <= m) {
        result.push(n * i);
        i++;
    }
    return result;
}

console.log(multiples(3, 5)) // [5, 10, 15]
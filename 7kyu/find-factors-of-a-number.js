function factors(x){
    if (!Number.isInteger(x)|| x < 1) return -1;
    const numbers = [];
    for (let i = x; i > 0; i--) {
        if (x % i === 0) numbers.push(i);
    }
    return numbers;
}

console.log(factors(54),[54,27,18,9,6,3,2,1])
console.log(factors(9),[9,3,1])
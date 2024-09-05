function productFib(prod) {
    let i = 1;
    let j = 1;

    while (i * j < prod) {
        let next = i + j;
        i = j;
        j = next;
    }
    return [i, j, i * j === prod];
}

console.log(productFib(4895));
console.log(productFib(5895));
console.log(productFib(74049690));
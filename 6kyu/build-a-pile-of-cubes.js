function findNb(m) {
    let i = 0;
    while (m > 0) {
        i++;
        m -= Math.pow(i, 3)
    }
    return m === 0 ? i : -1;
}

console.log(findNb(1071225));
console.log(findNb(4183059834009));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));
console.log(findNb(24723578342962));

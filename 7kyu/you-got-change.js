function giveChange(amount) {
    const bills = [1, 5, 10, 20, 50, 100];
    let result = [];
    let i = 5;
    while (i >= 0) {
        result[i] = Math.floor(amount / bills[i])
        amount = amount % bills[i];
        i--;
    }
    return result
}

console.log(giveChange(365), [0,1,1,0,1,3]);
console.log(giveChange(217), [2,1,1,0,0,2]);
console.log(giveChange(8),   [3,1,0,0,0,0]);
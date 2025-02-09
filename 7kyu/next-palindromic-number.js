function nextPal(val) {
    let i = val + 1;
    while (i !== +Array.from(i.toString()).reverse().join("")) {
        i++;
    }
    return i;
}

console.log(nextPal(11)); // 22
console.log(nextPal(188)); // 191
console.log(nextPal(191)); // 202
console.log(nextPal(2541)); // 2552

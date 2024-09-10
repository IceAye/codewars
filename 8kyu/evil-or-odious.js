function evil(n) {
    let binaryNumber = n.toString(2);
    let count = 0;

    for (const digit of binaryNumber) {
        if (+digit === 1) count++;
    }
    return count % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));

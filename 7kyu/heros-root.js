function intRac(n, guess) {
    let count = 0;
    let prev = 0;
    let current = guess;

    do {
        prev = current;
        current = Math.floor((prev + n / prev) / 2);
        count++;
    } while (Math.abs(current - prev) >= 1);

    return count;
}

console.log(intRac(25, 1, 4));
console.log(intRac(125348, 300, 3));
console.log(intRac(236, 12, 2));
console.log(intRac(48981764, 8000, 3));
console.log(intRac(6999, 700, 6));
console.log(intRac(16000, 400, 5));
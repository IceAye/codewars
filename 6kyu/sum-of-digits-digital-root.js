function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    while (n > 9) {
        let digits = String(n).split('').map(Number);
        n = digits.reduce((sum, current) => sum + current);
    }
    return n;
}
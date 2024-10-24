function findDifference(a, b) {
    let volume = (x) => x.reduce((result, mult) => result * mult, 1);
    return Math.abs(volume(a) - volume(b));
}
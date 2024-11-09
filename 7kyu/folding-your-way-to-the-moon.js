function foldTo(distance) {
    if (distance < 0) return null;

    let paper = 0.0001;
    let count = 0;

    while (paper < distance) {
        count++;
        paper *= 2
    }
    return count;
}

console.log(foldTo(384000000)) // 42
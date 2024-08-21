function bouncingBall(h, bounce, window) {
    if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) return -1;

    let count = 0;
    let currentHeight = h * bounce;
    while (currentHeight > window) {
        count += 2;
        currentHeight *= bounce;
    }
    return count + 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
console.log(bouncingBall(2.0, 0.5, 1));
console.log(bouncingBall(10.0, 0.6, 10.0));

function replicate(times, number) {
    return times > 0 ? new Array(times).fill(number) : [];
}

function replicate(times, number) {
    return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}

console.log(replicate(3,5), [5, 5, 5]);
console.log(replicate(5,1), [1, 1, 1, 1, 1]);
console.log(replicate(0,12), []);
console.log(replicate(-1,12), []);
console.log(replicate(8,0), [0, 0, 0, 0, 0, 0, 0, 0]);
function race(v1, v2, g) {
    let diff = g / (v2 - v1);
    let hours = Math.floor(diff);
    let minutes =  Math.floor((diff * 60) % 60);
    let seconds = Math.floor((diff * 3600) % 60);
    return v2 > v1 ? [ hours, minutes, seconds ] : null;
}

console.log(race(720, 850, 70)) // [0, 32, 18]
console.log(race(80, 91, 37)) // [3, 21, 49]
console.log(race(80, 100, 40)) // [2, 0, 0]
console.log(race(720, 850, 37)) // [0, 17, 4]
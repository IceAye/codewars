function worth(side, worth) {
    return side.split(" ").reduce((acc, curr, currentIndex) => {
        acc += worth[currentIndex] * +curr;
        return acc;
    }, 0);
}

function goodVsEvil(good, evil) {
    let battle = worth(good, [1, 2, 3, 3, 4, 10]) - worth(evil, [1, 2, 2, 2, 3, 5, 10]);
    return `Battle Result: ${battle > 0 ? "Good triumphs over Evil" : battle < 0 ? "Evil eradicates all trace of Good" : "No victor on this battle field"}`;
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));

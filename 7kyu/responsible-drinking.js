function hydrate(s) {
    let number = s.split(" ").reduce((acc, curr) => {
        if (/\d/.test(curr)) acc += +curr;
        return acc;
    }, 0);
    return `${number} ${number === 1 ? 'glass' : 'glasses'} of water`;
}

console.log(hydrate("1 beer")); // "1 glass of water"
console.log(hydrate("2 glasses of wine and 1 shot")); // "3 glasses of water"
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")); // "10 glasses of water"
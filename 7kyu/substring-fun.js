function nthChar(words) {
    return words.reduce((acc, curr, ind) => {
        acc += curr[ind];
        return acc;
    }, "");
}

console.log(nthChar([])); // ''
console.log(nthChar(["yoda", "best", "has"])); //  'yes'
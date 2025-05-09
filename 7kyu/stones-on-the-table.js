function solve(stones) {
    let result = 0;

    for (let i = 0; i < stones.length - 1; i++) {
        if (stones[i] === stones[i + 1]) result++;
    }
    return stones.length ? result : 0;
}

console.log( solve(""), 0 );
console.log( solve("RRGGBB"), 3 );
console.log( solve("RGBRGB"), 0 );
console.log( solve("BGRBBGGBRRR"), 4 );
console.log( solve("GBBBGGRRGRB"), 4 );
console.log( solve("GBRGGRBBBBRRGGGB"), 7 );
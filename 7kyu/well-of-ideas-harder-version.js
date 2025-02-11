function well(x){
    let count = 0;
    x = x.flat()
    for (const el of x) {
        if (typeof el === 'string' && el.match(/good/i)) count++
    }
    return count ? count < 3 ? 'Publish!' : count > 2 ? 'I smell a series!' : 'Fail!': 'Fail!'
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])) // 'Fail!'
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])) // 'Publish!'
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])) // 'I smell a series!'
console.log(well([
    [ 'cheat', 'bad' ],
    [ 'CAPS', 16, 'cheat', 3, 'RAD', 'bad' ],
    [ 'bad', 'bad', 6, 'DAB' ]
])) // 'Fail!'
// ❓ DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// The sub arrays may not be the same length.
// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
//
// ✅ SOLUTION:
function well(x){
    let count = 0;
    x = x.flat()
    for (const el of x) {
        if (typeof el === 'string' && el.match(/good/i)) count++
    }
    return count ? count < 3 ? 'Publish!' : count > 2 ? 'I smell a series!' : 'Fail!': 'Fail!'
}

// 📌 TESTCASE:
console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])) // 'Fail!'
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])) // 'Publish!'
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])) // 'I smell a series!'
console.log(well([
    [ 'cheat', 'bad' ],
    [ 'CAPS', 16, 'cheat', 3, 'RAD', 'bad' ],
    [ 'bad', 'bad', 6, 'DAB' ]
])) // 'Fail!'
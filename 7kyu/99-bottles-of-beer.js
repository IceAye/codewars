// ❓ DESCRIPTION:
// Instructions
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
//
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
//
// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
//
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
//
// ...and so on...
//
// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.
//
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
//
// ✅ SOLUTION:
const sing = function () {
    let result = [], i = 99;

    while (i > 0) {
        let current = i + (i === 1 ? ' bottle' : ' bottles');
        let left = i - 1 === 1 ? '1 bottle' : i - 1 === 0 ? 'no more bottles' : i - 1 + ' bottles';
        result.push(current + ' of beer on the wall, ' + current + ' of beer.');
        result.push('Take one down and pass it around, ' + left + ' of beer on the wall.');
        i--;
    }

    result.push('No more bottles of beer on the wall, no more bottles of beer.');
    result.push('Go to the store and buy some more, 99 bottles of beer on the wall.');

    return result;
};

// 📌 TESTCASE:
console.log(sing())

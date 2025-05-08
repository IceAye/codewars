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

console.log(sing())

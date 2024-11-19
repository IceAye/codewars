let isAnagram = function(test, original) {
    let arrTest = test.toLowerCase().split('').sort().join('')
    let arrOriginal = original.toLowerCase().split('').sort().join('')
    return arrTest === arrOriginal
};
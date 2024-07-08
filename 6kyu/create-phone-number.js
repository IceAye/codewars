function createPhoneNumber(numbers){
    let code = numbers.slice(0,3).join('');
    let start = numbers.slice(3,6).join('')
    return '(' + code + ') ' + start + '-' + numbers.slice(6).join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
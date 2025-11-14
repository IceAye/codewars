function isKiss(words) {
    const arr = words.split(' ');
    for (const el of arr) {
        if (el.length > arr.length) return 'Keep It Simple Stupid';
    }
    return 'Good work Joe!';
}

function isKiss(words) {
    const arr = words.split(' ');
    return arr.every(word => word.length <= arr.length) ? 'Good work Joe!' : 'Keep It Simple Stupid';
}

console.log(isKiss('Joe had a bad day'), 'Good work Joe!');
console.log(isKiss('Joe had some bad days'), 'Good work Joe!');
console.log(isKiss('Joe is having no fun'), 'Keep It Simple Stupid');
console.log(isKiss('Sometimes joe cries for hours'), 'Keep It Simple Stupid');

function tArea(tStr) {
    const array = tStr.split('\n');
    return array[array.length - 2].match(/\s/g).length ** 2 / 2 ;
}

console.log(tArea('\n.\n. .\n'), 0.5)
console.log(tArea('\n.\n. .\n. . .\n'), 2)
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8)
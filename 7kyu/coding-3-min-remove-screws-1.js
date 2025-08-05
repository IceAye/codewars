function sc(screws){
    const sumSwitches = (screws.match(/(?=(-\+|\+-))/g) ?? '').length;
    return screws.length * 2 - 1 + sumSwitches * 5;
}

console.log(sc("---+++", 16));
console.log(sc("-+-+-+", 36));
console.log(sc("-+-+-----------", 49));
console.log(sc("-+-+-++++++++++", 54));
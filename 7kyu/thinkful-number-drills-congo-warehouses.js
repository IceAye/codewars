function boxCapacity(length, width, height) {
    const long = Math.floor(length * 12 / 16);
    const wide = Math.floor(width * 12 / 16)
    const high = Math.floor(height * 12 / 16);
    return long * wide * high;
}

console.log(boxCapacity(32, 64, 16), 13824);
console.log(boxCapacity(20, 20, 20), 3375);
console.log(boxCapacity(80, 40, 20), 27000);
console.log(boxCapacity(44, 97, 88), 156816);
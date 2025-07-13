function direction(facing, turn) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const targetDirectionIndex = (directions.indexOf(facing) + turn / 45 ) % directions.length;

    return targetDirectionIndex < 0 ? directions[directions.length + targetDirectionIndex] : directions[targetDirectionIndex];
}

console.log(direction("S", 180), "N");
console.log(direction("SE", -45), "E");
console.log(direction("W", 495), "NE");
console.log(direction("N", -450), "W");

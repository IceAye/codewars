function flyBy(lamps, drone) {
    let string = "";
    if (drone.length >= lamps.length) {
        return string.padStart(lamps.length, "o");
    }
    return (
        string.padStart(drone.length, "o") +
        string.padEnd(lamps.length - drone.length, "x")
    );
}

console.log(flyBy("xxxxxx", "====T")); // 'ooooox'
console.log(flyBy("xxxxxxxxx", "==T")); // 'oooxxxxxx'
console.log(flyBy("xxxxxxxxxxxxxxx", "=========T")); // 'ooooooooooxxxxx')
console.log(flyBy("xx", "==T")); // 'oo')
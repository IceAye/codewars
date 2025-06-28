const whatTimeIsIt = function (angle) {
    let hours = Math.floor(angle / 30);
    if (hours === 0) hours = 12;
    const minutes = Math.floor(angle % 30 * 2);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

console.log(whatTimeIsIt(0), "12:00");
console.log(whatTimeIsIt(90), "03:00");
console.log(whatTimeIsIt(180), "06:00");
console.log(whatTimeIsIt(270), "09:00");
console.log(whatTimeIsIt(360), "12:00");
console.log(whatTimeIsIt(40), "01:20");
console.log(whatTimeIsIt(45), "01:30");
console.log(whatTimeIsIt(50), "01:40");

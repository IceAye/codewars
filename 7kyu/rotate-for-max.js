function maxRot(n) {
    let string = n.toString();
    let array = [string];
    for (let i = 0; i < string.length; i++) {
        string = string.slice(0, i) + string.slice(i + 1) + string[i];
        array.push(string.split("").join(""));
    }
    return Math.max(...array);
}

console.log(maxRot(38458215)); // 85821534
console.log(maxRot(195881031)); // 988103115
console.log(maxRot(896219342)); // 962193428
console.log(maxRot(69418307)); // 94183076

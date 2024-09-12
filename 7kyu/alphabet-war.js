const leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
}

const RightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
}
function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (const char of fight) {
        if (leftPower.hasOwnProperty(char)) left += leftPower[char];
        if (RightPower.hasOwnProperty(char)) right += RightPower[char];
    }
    return left > right ? "Left side wins!" : right > left ? "Right side wins!" : "Let's fight again!";
}

console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwww"));

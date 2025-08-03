function countSalutes(hallway) {
    let result = 0;

    for (let i = 0; i < hallway.length; i++) {
        if (hallway[i] === '>') {
            result += (hallway.slice(i).match(/</g) ?? '').length * 2;
        }
    }
    return result;
}

function countSalutes(hallway) {
    let result = 0;
    let right = 0;

    for (const char of hallway) {
        if (char === '>') {
            right++;
        } else if (char === '<') {
            result += 2 * right;
        }
    }
    return result;
}

console.log(countSalutes('<---->---<---<-->', 4))
console.log(countSalutes('------', 0))
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->', 42))
console.log(countSalutes('<<----<>---<', 2))
console.log(countSalutes('>', 0))
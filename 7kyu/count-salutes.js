function countSalutes(hallway) {
    let result = 0;

    for (let i = 0; i < hallway.length; i++) {
        if (hallway[i] === '>') {
            result += (hallway.slice(i).match(/</g) ?? '').length * 2;
        }
    }
    return result;
}

console.log(countSalutes('<---->---<---<-->', 4))
console.log(countSalutes('------', 0))
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->', 42))
console.log(countSalutes('<<----<>---<', 2))
console.log(countSalutes('>', 0))
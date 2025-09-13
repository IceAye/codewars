function read(tape, head, moves) {
    let output = '';

    for (let i = 0; i < moves.length; i++) {
        output += tape[head];
        moves[i] === '>' ? head++ : head--;
    }
    return output;
}

console.log(read('011010', 2, '>>><'), '1010');
console.log(read('011010', 2, ''), '');
console.log(read('011010', 0, '>>>>>'), '01101');
console.log(read('011010', 5, '<<<<<'), '01011');
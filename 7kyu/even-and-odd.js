function evenAndOdd(num) {
    let NE = "";
    let NO = "";
    for (const digit of num.toString()) {
        if (+digit % 2 === 0) {
            NE += digit;
        } else NO += digit;
    }

    return [+NE, +NO];
}

console.log(evenAndOdd(126453), [264, 153], `For input 126453`);
console.log(evenAndOdd(3012), [2, 31], `For input 3012`);
console.log(evenAndOdd(4628), [4628, 0], `For input 4628`);
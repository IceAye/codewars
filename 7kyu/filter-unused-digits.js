function unusedDigits(...args) {
    let string = args.join("");
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        .filter((ch) => !string.includes(ch))
        .join("");
}

function unusedDigits(...args){
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"
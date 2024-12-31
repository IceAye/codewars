function bandNameGenerator(str) {
    let first = str[0].toUpperCase();
    let rest = str.slice(1);
    if (str.at(0) === str.at(-1)) {
        return first + rest.repeat(2);
    } else {
        return "The " + first + rest;
    }
}

console.log(bandNameGenerator("knife")); // 'The Knife'
console.log(bandNameGenerator("tart")); // 'Tartart'
console.log(bandNameGenerator("sandles")); // 'Sandlesandles'
console.log(bandNameGenerator("bed")); // 'The Bed'
function parse(data) {
    let result = [];
    data.split("").reduce((acc, curr) => {
        if (curr === "i") acc++;
        if (curr === "d") acc--;
        if (curr === "s") acc = acc**2;
        if (curr === "o") result.push(acc);
        return acc
    }, 0);
    return result;
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));

function makePassword(phrase) {
    const cypher = {
        i: "1",
        o: "0",
        s: "5",
    };
    return phrase.split(" ").reduce((acc, curr) => {
        acc += cypher[curr[0].toLowerCase()] || curr[0];
        return acc;
    }, "");
}

function makePassword(phrase) {
    return phrase
        .split(" ")
        .map((el) => el[0])
        .join("")
        .replace(/[iso]/gi, (x) => ({ i: 1, s: 5, o: 0 })[x.toLowerCase()]);
}

console.log(makePassword("Give me liberty or give me death")); // "Gml0gmd"
console.log(makePassword("Keep Calm and Carry On")); // "KCaC0"
function part(x) {
    const alan = new Set([
        "Partridge",
        "PearTree",
        "Chat",
        "Dan",
        "Toblerone",
        "Lynn",
        "AlphaPapa",
        "Nomad",
    ]);

    let exclamationCount = 0;

    for (const word of x) {
        if (alan.has(word)) exclamationCount++;
    }

    return exclamationCount
        ? "Mine's a Pint" + "!".repeat(exclamationCount)
        : "Lynn, I've pierced my foot on a spike!!";
}

function part(x) {
    const alan = new Set([
        "Partridge",
        "PearTree",
        "Chat",
        "Dan",
        "Toblerone",
        "Lynn",
        "AlphaPapa",
        "Nomad",
    ]);

    let exclamationCount = x.filter(word => alan.has(word)).length;

    return exclamationCount
        ? "Mine's a Pint" + "!".repeat(exclamationCount)
        : "Lynn, I've pierced my foot on a spike!!";
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');
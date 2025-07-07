// ❓ DESCRIPTION:
// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!
//
// The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:
//
// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad
// If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!

// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
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

// 📌 TESTCASE:
console.log(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');
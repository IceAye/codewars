function myLanguages(results) {
    let array = [];
    for (const skill in results) {
        if (results[skill] >= 60) array.push(skill);
    }
    return array.sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));
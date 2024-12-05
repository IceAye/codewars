function getMissingElement(superImportantArray) {
    superImportantArray.sort();
    for (let i = 0; i < superImportantArray.length; i++) {
        if (superImportantArray[i] !== i) return i;
    }
    return 9;
}

function getMissingElement(superImportantArray){
    for (let i = 0; i <= 9; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
    }
}

function getMissingElement(superImportantArray) {
    return superImportantArray.reduce((acc, curr) => acc - curr, 45);
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3

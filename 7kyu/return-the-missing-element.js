// ❓ DESCRIPTION:
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
//
// ✅ SOLUTION 1:
function getMissingElement(superImportantArray) {
    superImportantArray.sort();
    for (let i = 0; i < superImportantArray.length; i++) {
        if (superImportantArray[i] !== i) return i;
    }
    return 9;
}

// ✅ SOLUTION 2:
function getMissingElement(superImportantArray){
    for (let i = 0; i <= 9; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
    }
}

// ✅ SOLUTION 3:
function getMissingElement(superImportantArray) {
    return superImportantArray.reduce((acc, curr) => acc - curr, 45);
}

// 📌 TESTCASE:
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3

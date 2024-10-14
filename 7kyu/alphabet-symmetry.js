// ❓ DESCRIPTION:
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
//
// ✅ SOLUTION 1:
const abc = "abcdefghijklmnopqrstuvwxyz"
function solve(arr) {
    let result = [];
    for (const word of arr) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.at(i).toLowerCase() === abc.at(i)) count++
        }
        result.push(count)
    }
    return result;
}

// ✅ SOLUTION 2:
function solve(arr) {
    return arr.map((item) =>
        [...item.toLowerCase()].reduce(
            (acc, curr, index) => acc + (curr.charCodeAt() == index + 97), 0
        ),
    );
}

// ✅ SOLUTION 3:
const abc = "abcdefghijklmnopqrstuvwxyz";

function solve(arr) {
    return arr.map(
        (char) =>
            char
                .toLowerCase()
                .split("")
                .filter((c, i) => i === abc.indexOf(c)).length,
    );
}

// 📌 TESTCASE:
console.log(solve(["abode", "ABc", "xyzD"]));
console.log(solve(["abide","ABc","xyz"]));
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));

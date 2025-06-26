// ❓ DESCRIPTION:
// his kata is part of the collection Mary's Puzzle Books.
// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:
// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.
// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.
//
// NOTES:
// • If both strings are the same, return []
// • Both strings will always be the same length
// • Capitalization and punctuation matter
//
// ✅ SOLUTION:
function spot(s1,s2){
    const positions = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) positions.push(i);
    }
    return positions;
}

// 📌 TESTCASE:
console.log(spot('abcdefg', 'abcqetg'), [3, 5]);
console.log(spot('Hello World!', 'hello world.'), [0, 6, 11]);
console.log(spot('FixedGrey', 'FixedGrey'), []);
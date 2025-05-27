// ❓ DESCRIPTION:
// For a given string s find the character c (or C) with longest consecutive repetition and return:
//
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//
// For empty string return:
// ["", 0]
// Happy coding! :)
//
// ✅ SOLUTION 1:
function longestRepetition(s) {
    const max = ['', 0];
    let temp = 1;
    let i = 1;
    while (i < s.length) {
        while (s[i] === s[i - 1]) {
            temp++;
            i++;
        }
        if (max[1] < temp) {
            max[1] = temp;
            max[0] = s[i - 1];
        }
        i++;
        temp = 1;
    }

    return max;
}

// ✅ SOLUTION 2:
function longestRepetition(s) {
    const max = ['', 0];
    if (s.length) {
        let array = s.match(/(.)\1*/g);
        for (const item of array) {
            if (item.length > max[1]) {
                max[0] = item[0];
                max[1] = item.length;
            }
        }
    }
    return max;
}

// 📌 TESTCASE:
console.log( longestRepetition("aaaabb"),      ["a",4] );
console.log( longestRepetition("bbbaaabaaaa"), ["a",4] );
console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
console.log( longestRepetition("abbbbb"),      ["b",5] );
console.log( longestRepetition("aabb"),        ["a",2] );
console.log( longestRepetition(""),            ["",0] );
console.log( longestRepetition("ba"),          ["b",1] );

// ❓ DESCRIPTION:
// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia
//
// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//
// ✅ SOLUTION 1:
const runLengthEncoding = function(str){
    if (str.length === 0) return [];

    const result = [];
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result.push([count, currentChar]);
            currentChar = str[i];
            count = 1;
        }
    }
    result.push([count, currentChar]);

    return result;
}

// ✅ SOLUTION 2:
const runLengthEncoding = function(str){
    return (str.match(/(.)\1*/g) || []).reduce((acc, curr) => {
        acc.push([curr.length, curr[0]]);
        return acc;
    }, []);
}

// 📌 TESTCASE:
console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
console.log(runLengthEncoding("hello world!"), [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"), [[34,'a'], [3,'b']]);
console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),[[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]);
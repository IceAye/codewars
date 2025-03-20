// ❓ DESCRIPTION:
// A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings.
// Let us build a new string strng of size (n + 1) x n in the following way:
// The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
// The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
// and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
//
// ✅ SOLUTION:
function compose(s1, s2) {
    let result = [];
    let string1 = s1.split('\n');
    let string2 = s2.split('\n');

    for (let i = 0; i < string1.length; i++) {
        result.push(string1[i].slice(0, i + 1) + string2.at(-1 - i).slice(0, string2.length - i));
    }

    return result.join('\n');
}

// 📌 TESTCASE:
console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")) // "bNkTB\nhTrWO\nRTFVi\nCnnIj"
console.log(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW")) // "HgYPW\nTGGbM\nIPhqt\nuUMDH"
console.log(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf")) // "tzlYf\nOOmYF\nsqPEZ\nxMkBh"
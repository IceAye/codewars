// ❓ DESCRIPTION:
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at
// beginning or end). The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
//
// ✅ SOLUTION 1:
function tailSwap(arr) {
    let splitted = arr.map(item => item.split(":"));
    [splitted[0][0], splitted[0][1], splitted[1][0], splitted[1][1]] = [splitted[0][0], splitted[1][1], splitted[1][0], splitted[0][1]]
    return splitted.map(item => item.join(":"));
}

// ✅ SOLUTION 2:
function tailSwap(arr) {
    const [[a, b], [c, d]] = arr.map(item => item.split(":"));
    return [`${a}:${d}`, `${c}:${b}`]
}

// 📌 TESTCASE:
console.log(tailSwap(['abc:123', 'cde:456'])) // ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz'])) // ['a:xyz', '777:12345']


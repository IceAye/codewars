// ❓ DESCRIPTION:
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
// If
// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//
// ✅ SOLUTION:
function revrot(str, sz) {
    if (str === 0 || sz === 0 || str < sz) return "";
    let array = [];
    for (let i = 0; i < str.length; i += sz) {
        let chunk = str.slice(i, i + sz)
        if (chunk.length === sz) {
            let sum = [...chunk].reduce((acc, curr) => acc + +curr, 0)
            if (sum % 2 === 0) array.push([...chunk].reverse().join(""))
            if (sum % 2 === 1) array.push([...chunk].slice(1).join("") + [chunk.slice(0, 1)].join(""))
        }
    }
    return array.join("")
}

// 📌 TESTCASE:
console.log(revrot("1234", 0));
console.log(revrot("1234", 5));
console.log(revrot("733049910872815764", 5));
console.log(revrot("123456987654", 6));
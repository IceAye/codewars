// ❓ DESCRIPTION:
// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:
//
// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example:
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b'
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''
// More examples in the test cases. Good luck!
//
// ✅ SOLUTION:
function solve(s, k){
    if (k >= s.length) return '';

    let set = [...new Set(s)].sort();

    let i = 0;
    while (k > 0) {
        let char = new RegExp(`${set[i]}`, '');
        while (char.test(s) && k > 0) {
            s = s.replace(char, "");
            k--;
        }
        i++;
    }
    return s
}

// 📌 TESTCASE:
console.log(solve('abracadabra', 1),'bracadabra');
console.log(solve('abracadabra', 2),'brcadabra');
console.log(solve('abracadabra', 6),'rcdbr');
console.log(solve('abracadabra', 8),'rdr');
console.log(solve('abracadabra', 50),'');
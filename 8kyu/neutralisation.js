// ❓ DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
//
// ✅ SOLUTION:
function neutralise( s1 , s2 ) {
    let result = ''
    for (let i = 0; i < s1.length; i++) {
        if (s1.at(i) === s2.at(i)) {
            result += s1.at(i)
        } else {
            result += 0
        }
    }
    return result;
}

console.log(neutralise("--++--", "++--++"))
console.log(neutralise("-+-+-+", "-+-+-+"))
console.log(neutralise("+++--+---", "++----++-"))
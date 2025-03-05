// ❓ DESCRIPTION:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
//
// ✅ SOLUTION:
function remove(s, n) {
    let i = 0;
    while (i < n) {
        s = s.replace(/!/, "");
        i++;
    }
    return s;
}
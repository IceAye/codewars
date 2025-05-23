// ❓ DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// ✅ SOLUTION:
function longest(s1, s2) {
    let arr = [...s1, ...s2]
    return Array.from(new Set(arr)).sort().join('');
}
// ❓ DESCRIPTION:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// ✅ SOLUTION:
function replace(s){
    return s.replace(/[aeiou]/gi, '!')
}
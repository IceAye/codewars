// ❓ DESCRIPTION:
// Your task is simply to count the total number of lowercase letters in a string.
//
// ✅ SOLUTION:
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

console.log('Output: ' , lowercaseCount("abcABC123"))
console.log('Output: ' , lowercaseCount(""))
console.log('Output: ' , lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
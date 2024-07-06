function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

console.log('Output: ' , lowercaseCount("abcABC123"))
console.log('Output: ' , lowercaseCount(""))
console.log('Output: ' , lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
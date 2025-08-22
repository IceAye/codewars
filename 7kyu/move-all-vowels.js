function moveVowel(input) {
    const vowels = input.match(/[aeiou]/g || []).join('');
    return input.replace(/[aeiou]/g, '') + vowels;
}

console.log(moveVowel("day"),"dya");
console.log(moveVowel("apple"),"pplae");
console.log(moveVowel("peace"),"pceae");
console.log(moveVowel("maker"),"mkrae");
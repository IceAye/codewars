function getCount(words) {
    let sum = 0;
    let vowels = 0;
    if (typeof words === "string") {
        for (const char of words) {
            if (/[a-z]/gi.test(char)) {
                sum++;
                if (/[euioa]/gi.test(char)) {
                    vowels++;
                }
            }
        }
    }
    let consonants = sum - vowels;
    return { vowels, consonants };
}

console.log(getCount('Test')) // {vowels:1,consonants:3}
console.log(getCount('Here is some text')) // {vowels:6,consonants:8}
console.log(getCount('To be a Codewarrior or not to be')) // {vowels:12,consonants:13}
console.log(getCount('To Kata or not to Kata')) // {vowels:8,consonants:9}
console.log(getCount('aeiou')) // {vowels:5,consonants:0}
console.log(getCount('TEst')) // {vowels:1,consonants:3}
console.log(getCount('HEre Is sOme text   ')) // {vowels:6,consonants:8}
console.log(getCount()) // {vowels:0,consonants:0}
console.log(getCount(['To Kata or not to Kata'])) // {vowels:0,consonants:0}
console.log(getCount(undefined)) // {vowels:0,consonants:0}
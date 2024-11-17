// ❓ DESCRIPTION:
// Write a function
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// Your function should be case insensitive to the vowels.
//
// ✅ SOLUTION 1:
function vowel2index(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        /[euioa]/i.test(str[i]) ? newString += i + 1 : newString += str[i];
    }
    return newString;
}

// ✅ SOLUTION 2:
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (c, i) => i + 1);
}

// 📌 TESTCASE:
console.log(vowel2index('this is my string')) // 'th3s 6s my str15ng'
console.log(vowel2index('Codewars is the best site in the world')) // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
console.log(vowel2index('Tomorrow is going to be raining')) //  'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
console.log(vowel2index('')) //  ''
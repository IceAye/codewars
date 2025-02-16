// ❓ DESCRIPTION:
// Egg Talk.
// Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
//
// ✅ SOLUTION:
function heggeleggleggo(word){
    return word.replace(/([^aeiou ])/gi, '$1egg');
}

// 📌 TESTCASE:
console.log(heggeleggleggo("hello")) // "heggeleggleggo"
console.log(heggeleggleggo("code here")) // "ceggodegge heggeregge"
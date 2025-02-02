// ❓ DESCRIPTION:
// Unscramble the eggs.
// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
//
// ✅ SOLUTION 1:
function unscrambleEggs(word) {
    return word.replace(/egg/g, "");
}

// ✅ SOLUTION 2:
function unscrambleEggs(word) {
    return word.split('egg').join('');
}

// 📌 TESTCASE:
console.log(unscrambleEggs("ceggodegge heggeregge")); //  "code here"
console.log(unscrambleEggs("FeggUNegg KeggATeggA")); // "FUN KATA"
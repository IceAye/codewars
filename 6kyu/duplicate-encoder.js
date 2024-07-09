// ❓ DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string, or ")" if that character appears more than once
// in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// 📌EXAMPLES:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
//
// ✅ SOLUTION:
function duplicateEncode(word) {

    return word.toLowerCase().split("").map((letter, i, w) => {
            return w.indexOf(letter) === w.lastIndexOf(letter) ? "(" : ")";
        }
    ).join("");
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("CodeWarrior"))
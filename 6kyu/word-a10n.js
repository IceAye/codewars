// ❓ DESCRIPTION:
// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
//
// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
//
// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
//  input: "elephant-rides are really fun!"
//           ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
//  words (^):   "elephant" "rides" "are" "really" "fun"
//                 123456     123     1     1234     1
//  ignore short words:               X              X
//
//  abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
//  all non-word characters (*) remain in place
//                      "-"      " "    " "     " "     "!"
// output: "e6t-r3s are r4y fun!"
//
// ✅ SOLUTION 1:
function abbreviate(string) {
    let result = ''
    let word = '';

    function checkWordLength(element) {
        return element.length <= 3 ? element : element[0] + (element.length - 2) + element[element.length - 1]
    }

    for (const char of string) {
        if (/[a-z]/gi.test(char)) {
            word += char;
        } else {
            let abbreviations = checkWordLength(word)
            result += abbreviations + char;
            word = "";
        }
    }

    if (word) {
        result += checkWordLength(word)
    }

    return result;
}

// ✅ SOLUTION 2:
function abbreviate(string) {
    return string.replace(/[a-z]{4,}/gi, word => word[0] + (word.length - 2) + word[word.length - 1]);
}

// 📌 TESTCASE:
console.log(abbreviate("internationalization"), "i18n");
console.log(abbreviate('Go'), 'Go');
console.log(abbreviate("elephant-rides are really fun!"), "e6t-r3s are r4y fun!");
console.log(abbreviate(""), "");
console.log(abbreviate(":;=;:"), ":;=;:");
console.log(abbreviate("You need, need not want, to complete this code-wars mission"));
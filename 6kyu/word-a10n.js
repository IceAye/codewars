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

function abbreviate(string) {
    return string.replace(/[a-z]{4,}/gi, word => word[0] + (word.length - 2) + word[word.length - 1]);
}

console.log(abbreviate("internationalization"), "i18n");
console.log(abbreviate('Go'), 'Go');
console.log(abbreviate("elephant-rides are really fun!"), "e6t-r3s are r4y fun!");
console.log(abbreviate(""), "");
console.log(abbreviate(":;=;:"), ":;=;:");
console.log(abbreviate("You need, need not want, to complete this code-wars mission"));
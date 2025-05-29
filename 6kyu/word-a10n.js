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
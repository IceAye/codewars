// ❓ DESCRIPTION:
// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
//
// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words
//
// ✅ SOLUTION:
// preload variable: dict
const makeBackronym = function (string) {
    let result = [];
    for (const part of string.split('')) {
        result.push(dict[part])
    }
    return result.join('')
};

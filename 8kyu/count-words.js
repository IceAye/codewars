function countWords(str) {
    return str.split(/\s/).filter(item => item).length
}
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

console.log('Output: ' , solution("camelCasing"))
console.log('Output: ' , solution("camelCasingTest"))
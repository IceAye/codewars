function solution(pairs){
    return Object.entries(pairs).map(pair => pair.join(' = ')).join(',');
}

console.log(solution({'a': 1, 'b': 2})) // 'a = 1,b = 2'
console.log(solution({'a': 'b', 'b': 'a'})) // 'a = b,b = a'
console.log(solution({0: 'a', 'b': 2})) // '0 = a,b = 2'
console.log(solution({'b': 1, 'c': 2, 'e': 3})) // 'b = 1,c = 2,e = 3'
console.log(solution({})) // ''
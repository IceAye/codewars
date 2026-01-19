function solution(first, second) {
    let current = second;
    let previous = first;

    while (previous <= current) {
        [previous, current] = [ current - previous, previous]
    }

    return [current, current + previous];
}

console.log(solution(398, 644), [2, 6]);
console.log(solution(15, 28), [2, 13]);
console.log(solution(186, 301), [3, 7]);
console.log(solution(265, 429), [1, 12]);
console.log(solution(1186, 1919), [2, 7]);
console.log(solution(10, 10), [0, 10]);

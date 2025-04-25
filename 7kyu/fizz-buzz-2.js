function solution(number){
    let result = [0, 0, 0];

    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 && i % 5 !== 0) result[0]++;
        if (i % 3 !== 0 && i % 5 === 0) result[1]++;
        if (i % 3 === 0 && i % 5 === 0) result[2]++;
    }

    return result;
}

console.log(solution(20), [5, 2, 1]);
console.log(solution(2), [0, 0, 0]);
console.log(solution(14), [4,2,0]);
console.log(solution(30), [8, 4, 1]);
console.log(solution(141), [37, 19, 9]);
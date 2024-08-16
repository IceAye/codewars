function solution(digits) {
    let max = 0;

    for (let i = 0; i < digits.length; i++) {
        let number = digits.slice(i, i + 5);
        if (+number > max) {
            max = +number;
        }
    }

    return max;
}

console.log(solution("1234567898765"));
console.log(solution("731674765"));
console.log(solution("084275468646927"));

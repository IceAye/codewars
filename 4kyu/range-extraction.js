function solution(list) {
    let result = [];
    let inner = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i - 1] + 1 !== list[i] || list[i] + 1 !== list[i + 1]) {
            inner.push(list[i]);
        }
        if (inner.length) {
            result.push(inner);
            inner = [];
        } else {
            if (!(result[result.length - 1] === "-")) result.push("-");
        }
    }
    return result.join().replace(/,-,/g, "-");
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// "-6,-3-1,3-5,7-11,14,15,17-20")

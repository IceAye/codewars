function solution(start, finish) {
    let quantity = finish - start;
    return Math.floor(quantity / 3) + (quantity % 3);
}

console.log(solution(1, 5)); // 2

const solution = (M1, M2, m1, m2, v, t) => {
    return ((m1 / M1 + m2 / M2) * 0.082 * (273.15 + t)) / v;
};

console.log(solution(44 , 30 , 3 , 2 , 5 , 50));

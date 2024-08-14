// ❓ DESCRIPTION:
// Given the molecular mass of two molecules, their masses in a vessel of volume at a specific temperature,
// find the total pressure, exerted by the molecules.
//
// ✅ SOLUTION:
const solution = (M1, M2, m1, m2, v, t) => {
    return ((m1 / M1 + m2 / M2) * 0.082 * (273.15 + t)) / v;
};

console.log(solution(44 , 30 , 3 , 2 , 5 , 50));

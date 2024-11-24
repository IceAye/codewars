// ❓ DESCRIPTION:
// Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.
//
// ✅ SOLUTION:
function roots(a,b,c){
    let discriminant = b*b - 4 * a * c;
    if (discriminant < 0) return null;
    return +(-b/a).toFixed(2);
}

// 📌 TESTCASE:
console.log(roots(1, -35, -23)) // 35
console.log(roots(6, 0, -24)) // 0
console.log(roots(-5, 21, 0)) // 4.2
console.log(roots(1, 5, -24)) // -5
console.log(roots(3, 11, 6)) // 3.67
// ❓ DESCRIPTION:
// Given a mathematical equation that has *,+,-,/, reverse it as follows:
//
// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
//
// ✅ SOLUTION:
function solve(eq){
    return eq.split(/([*+\-/])/).reverse().join('');
}

// 📌 TESTCASE:
console.log(solve("100*b/y"),"y/b*100");
console.log(solve("a+b-c/d*30"),"30*d/c-b+a");
console.log(solve("a*b/c+50"),"50+c/b*a");
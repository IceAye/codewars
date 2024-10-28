// ❓ DESCRIPTION:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
// The order is: uppercase letters, lowercase letters, numbers and special characters.
//
// ✅ SOLUTION:
function solve(s){
    return [...s].reduce((acc, curr) => {
        /[A-Z]/g.test(curr) ? acc[0] += 1 : /[a-z]/g.test(curr) ? acc[1] += 1 : /\d/g.test(curr) ? acc[2] += 1 : acc[3] += 1;
        return acc;
    }, [0, 0, 0, 0])
}

// 📌 TESTCASE:
console.log(solve("")) // [0,0,0,0]
console.log(solve("aAbBcC")) // [3,3,0,0]
console.log(solve("Codewars@codewars123.com")) // [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ")) // [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")) // [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")) // [15,8,6,9]
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")) //  [10,7,3,6]
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")) //  [7,13,4,10]

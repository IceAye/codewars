// ❓ DESCRIPTION:
// The number 8989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289=81+92
// The next number in having this property is 135135:
// See this property again: 135=11+32+53135=11+32+53
// Task
// We need a function to collect these numbers, that may receive two integers aa, bb that defines the range [a,b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
// ✅ SOLUTION:
function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        let digits = Array.from(i.toString(), Number);
        let number = digits
            .map((item, index) => Math.pow(item, index + 1))
            .reduce((sum, current) => sum + current);
        if (i === number) result.push(i);
    }
    return result;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(10, 150));

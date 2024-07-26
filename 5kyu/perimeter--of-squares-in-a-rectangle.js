// ❓ DESCRIPTION:
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80.
// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n)
// and returns the total perimeter of all the squares.
//
// ✅ SOLUTION:

function perimeter(n) {
    let [a, b] = [1, 1];
    for (let i = 0; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return 4 * (b - 1);
}

console.log(perimeter(0));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));
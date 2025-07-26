// ❓ DESCRIPTION:
// One of the first algorithm used for approximating the integer square root of a positive integer n is known as "Hero's method", named after the first-century Greek mathematician Hero of Alexandria who gave the first description of the method. Hero's method can be obtained from Newton's method which came 16 centuries after.
// We approximate the square root of a number n by taking an initial guess x, an error e and repeatedly calculating a new approximate integer value x using: (x + n / x) / 2; we are finished when the previous x and the new x have an absolute difference less than e.
// We supply to a function (int_rac) a number n (positive integer) and a parameter guess (positive integer) which will be our initial x. For this kata the parameter 'e' is set to 1.
// Hero's algorithm is not always going to come to an exactly correct result! For instance: if n = 25 we get 5 but for n = 26 we also get 5. Nevertheless 5 is the integer square root of 26.
// The kata is to return the count of the progression of integer approximations that the algorithm makes.

// ✅ SOLUTION:
function intRac(n, guess) {
    let count = 0;
    let prev = 0;
    let current = guess;

    do {
        prev = current;
        current = Math.floor((prev + n / prev) / 2);
        count++;
    } while (Math.abs(current - prev) >= 1);

    return count;
}

// 📌 TESTCASE:
console.log(intRac(25, 1, 4));
console.log(intRac(125348, 300, 3));
console.log(intRac(236, 12, 2));
console.log(intRac(48981764, 8000, 3));
console.log(intRac(6999, 700, 6));
console.log(intRac(16000, 400, 5));
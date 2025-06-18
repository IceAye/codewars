// ❓ DESCRIPTION:
// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
// For your convenience, the input is formatted such that a space is provided between every token.
// Empty expression should evaluate to 0.
// Valid operations are +, -, *, /.
// You may assume that there won't be exceptional situations (like stack underflow or division by zero).
//
// ✅ SOLUTION:
function calc(expr) {
    const stack = [];
    const arr = expr.split(" ");

    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== '-' && arr[i] !== "+" && arr[i] !== "*" && arr[i] !== '/') {
            stack.push(Number(arr[i]));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            switch (arr[i]) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b);
            }
        }
        i++;
    }

    return stack[0];
}

// 📌 TESTCASE:
console.log(calc(''), 0)
console.log(calc('3'), 3)
console.log(calc('3.5'), 3.5)
console.log(calc('1 3 +'), 4)
console.log(calc('1 3 *'), 3)
console.log(calc('1 3 -'), -2)
console.log(calc('4 2 /'), 2)
console.log(calc('5 1 2 + 4 * + 3 -'), 14)
console.log(calc("-3.904966 4.036678 - -3.094541 + -2.162004 / -0.67892 1.269278 + -0.522435 4.963167 * / 2.076183 + - -2.115827 0.313493 -1.592689 / + /"), -1.4079485638076048)

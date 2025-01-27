function calcType(a, b, res) {
    return a - b === res
        ? "subtraction"
        : a + b === res
            ? "addition"
            : a * b === res
                ? "multiplication"
                : "division";
}

console.log(calcType(1, 2, 3)); // 'addition'
console.log(calcType(10, 4, 40)); // 'multiplication'
console.log(calcType(10, 5, 5)); // 'subtraction'
console.log(calcType(9, 5, 1.8)); // 'division'
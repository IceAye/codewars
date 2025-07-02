function calculate_total(subtotal, tax, tip) {
    const taxAddition = subtotal * tax / 100;
    const tipAddition = subtotal * tip / 100;
    return +(subtotal + taxAddition + tipAddition).toFixed(2);
}

console.log(calculate_total(5, 5, 10), 5.75);
console.log(calculate_total(36.97, 7, 15), 45.10);
console.log(calculate_total(0.00, 6, 18), 0.00);
console.log(calculate_total(80.94, 0, 20), 97.13);
console.log(calculate_total(54.96, 8, 0), 59.36);
function countArara(n) {
    if (n === 1) return "anane";
    return n % 2
        ? "adak ".repeat(n / 2) + "anane"
        : "adak" + " adak".repeat(n / 2 - 1);
}

console.log(countArara(1)); // "anane"
console.log(countArara(3)); // "adak anane"
console.log(countArara(8)); // "adak adak adak adak"
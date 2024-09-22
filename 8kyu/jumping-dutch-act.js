function sc(floor) {
    return floor < 2
        ? ""
        : floor < 7
            ? "Aa~ ".repeat(floor - 1) + "Pa! Aa!"
            : "Aa~ ".repeat(floor - 1) + "Pa!";
}

console.log(sc(2))
console.log(sc(6))
console.log(sc(7))
console.log(sc(10))
console.log(sc(1))
console.log(sc(-1))

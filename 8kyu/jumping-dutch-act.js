// ❓ DESCRIPTION:
// Mr. despair wants to jump off Dutch act, So he came to the top of a building.
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)
// Input: floor, The height of the building (floor)
// Output: a string, The voice of despair(When jumping Dutch act)
//
// 📌 EXAMPLE:
// sc(2) should return "Aa~ Pa! Aa!"
//
// ✅ SOLUTION:
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

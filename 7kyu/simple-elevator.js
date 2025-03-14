const levels = new Set([0, 1, 2, 3]);
const buttons = new Set(["0", "1", "2", "3"]);

function goto(level, button) {
    if (!levels.has(level) || !buttons.has(button)) return 0;
    return +button - level;
}

console.log(goto(0,'2')) // 2
console.log(goto(3,'0')) // -3
console.log(goto(2,'2')) // 2
console.log(goto(2,'4')) // 0
console.log(goto(3,undefined)) // 0
console.log(goto(undefined,'2')) // 0
console.log(goto([],'2')) // 0
console.log(goto(3,{})) // 0
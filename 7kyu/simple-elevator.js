// ❓ DESCRIPTION:
// There is a house with 4 levels. In that house there is an elevator. You can program this elevator to go up or down, depending on what button the user touches inside the elevator.
// Valid levels must be only these numbers: 0,1,2,3
// Valid buttons must be only these strings: '0','1','2','3'
// Possible return values are these numbers: -3,-2,-1,0,1,2,3
//
// If the elevator is on the ground floor(0th level) and the user touches button '2' the elevator must go 2 levels up, so our function must return 2.
// If the elevator is on the 3rd level and the user touches button '0' the elevator must go 3 levels down, so our function must return -3.
// If the elevator is on the 2nd level, and the user touches button '2' the elevator must remain on the same level, so we return 0.
//
// We cannot endanger the lives of our passengers, so if we get erronous inputs, our elevator must remain on the same level.
//
// ✅ SOLUTION:
const levels = new Set([0, 1, 2, 3]);
const buttons = new Set(["0", "1", "2", "3"]);

function goto(level, button) {
    if (!levels.has(level) || !buttons.has(button)) return 0;
    return +button - level;
}

// 📌 TESTCASE:
console.log(goto(0,'2')) // 2
console.log(goto(3,'0')) // -3
console.log(goto(2,'2')) // 2
console.log(goto(2,'4')) // 0
console.log(goto(3,undefined)) // 0
console.log(goto(undefined,'2')) // 0
console.log(goto([],'2')) // 0
console.log(goto(3,{})) // 0
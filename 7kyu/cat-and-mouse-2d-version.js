// ❓ DESCRIPTION:
// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.
// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.
// Finally, if one of two animals are not present, return "boring without two animals".
//
// ✅ SOLUTION:
function catMouse(map, moves) {
    let catPos, mousePos;
    const rows = map.split('\n');

    for (let y = 0; y < rows.length; y++) {
        const xC = rows[y].indexOf('C');
        const xM = rows[y].indexOf('m');

        if (xC !== -1) catPos = {xC, y};
        if (xM !== -1) mousePos = {xM, y};
    }

    if (!catPos || !mousePos) {
        return "boring without two animals";
    }

    const distance = Math.abs(catPos.xC - mousePos.xM) + Math.abs(catPos.y - mousePos.y);

    return distance <= moves ? "Caught!" : "Escaped!";
}

// 📌 TESTCASE:
let map=
    `..C......
.........
....m....`

console.log(catMouse(map,5),'Caught!')
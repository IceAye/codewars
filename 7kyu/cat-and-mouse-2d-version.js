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

let map=
    `..C......
.........
....m....`

console.log(catMouse(map,5),'Caught!')
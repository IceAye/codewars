// ❓ DESCRIPTION:
// Ready! Set! Fire... but where should you fire?
//
// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:
//
// ["top left",    "top middle",    "top right",
//  "middle left", "center",        "middle right",
//  "bottom left", "bottom middle", "bottom right"]
// HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;
//
// Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.
//
// x = 0, y = 0 --> "top left"
// x = 1, y = 2 --> "bottom middle"
// etc
// Notice the grid is a monodimensional array, good luck!

// ✅ SOLUTION 1:
function fire(x,y) {
    const axisX = x === 0 ? 'left' : x === 1 ? 'middle' : 'right';
    const axisY = y === 0 ? 'top' : y === 1 ? 'middle' : 'bottom';
    return x === 1 && y === 1 ? 'center' : `${axisY} ${axisX}`;
}

// ✅ SOLUTION 2:
function fire(x,y) {
    return grid[x + (3 * y)];
}

// 📌 TESTCASE:
console.log(fire(0,0),'top left')
console.log(fire(1,2),'bottom middle')
console.log(fire(1,1),'center')
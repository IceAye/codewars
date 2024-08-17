const oppositeDirections = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
};

function dirReduc(arr) {
    let path = arr.length;
    if (path > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] === oppositeDirections[arr[i]]) arr.splice(i, 2);
        }
        if (path !== arr.length) {
            dirReduc(arr);
        } else return arr;
    }
    return arr;
}

console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

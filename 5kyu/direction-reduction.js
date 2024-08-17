// ❓ DESCRIPTION:
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.  Going to one direction and coming back the
// opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much
// water, it's important to save yourself some energy, otherwise you might die of thirst!  How I crossed a mountainous
// desert the smart way.
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless
// directions removed
//
// ✅ SOLUTION:

const oppositeDirections = {
    NORTH: "SOUTH" ,
    SOUTH: "NORTH" ,
    EAST: "WEST" ,
    WEST: "EAST" ,
};

function dirReduc( arr ) {
    let path = arr.length;
    if (path > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] === oppositeDirections[arr[i]]) arr.splice(i , 2);
        }
        if (path !== arr.length) {
            dirReduc(arr);
        } else return arr;
    }
    return arr;
}

console.log(
    dirReduc(["NORTH" , "SOUTH" , "SOUTH" , "EAST" , "WEST" , "NORTH" , "WEST"]) ,
);
console.log(dirReduc(["NORTH" , "WEST" , "SOUTH" , "EAST"]));
console.log(dirReduc(["NORTH" , "SOUTH" , "EAST" , "WEST" , "EAST" , "WEST"]));

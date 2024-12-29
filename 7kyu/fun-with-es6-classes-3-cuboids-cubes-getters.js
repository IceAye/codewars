// ❓ DESCRIPTION:
// Define the following classes.
//
// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length,
// width, height and store these three values in this.length, this.width and this.height respectively.
// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter
// volume which returns the volume of the cuboid.
//
// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its
// length, and use that value passed in to set this.length, this.width and this.height.
// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
//
// ✅ SOLUTION:
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get volume() {
        return this.width * this.length * this.height;
    }

    get surfaceArea() {
        return (
            2 *
            (this.width * this.length +
                this.width * this.height +
                this.length * this.height)
        );
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

// 📌 TESTCASE:
let cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length); // 1
console.log(cuboid.width); // 2
console.log(cuboid.height); // 3
console.log(cuboid.volume); // 6
console.log(cuboid.surfaceArea); // 22
cuboid.length = 4;
console.log(cuboid.volume); // 24
console.log(cuboid.surfaceArea); // 52
cuboid.width = 5;
console.log(cuboid.volume); // 60
console.log(cuboid.surfaceArea); // 94
cuboid.height = 6;
console.log(cuboid.volume); // 120
console.log(cuboid.surfaceArea); // 148

let cube = new Cube(1);
console.log(cube.length); // 1
console.log(cube.width); // 1
console.log(cube.height); // 1
console.log(cube.volume); // 1
console.log(cube.surfaceArea); // 6
cube.length = cube.width = cube.height = 2;
console.log(cube.volume); // 8
console.log(cube.surfaceArea); // 24
cube.length = cube.width = cube.height = 3;
console.log(cube.volume); // 27
console.log(cube.surfaceArea); // 54
cube.length = cube.width = cube.height = 5;
console.log(cube.volume); // 125
console.log(cube.surfaceArea); // 150
cube.length = cube.width = cube.height = 10;
console.log(cube.volume); // 1000
console.log(cube.surfaceArea); // 600

// ❓ DESCRIPTION:
// In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions (i.e. length,
// width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved
// this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid
// whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do
// is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite
// number of possibilities to the dimensions of the cuboid. However, for cubes (a special type of cuboid), since their
// length, width and height are always the same, it is possible to figure out the side length of a cube given its
// surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both
// the surface area and volume of a cube.
//
// Task
// Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the
// argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the
// cube. No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is
// highly recommended that you use ES6 syntax and features to complete this Kata.
//
// ✅ SOLUTION:
class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        return this.length ** 2 * 6;
    }

    set surfaceArea(value) {
        this.length = Math.sqrt(value / 6);
    }

    get volume() {
        return Math.pow(this.length, 3);
    }

    set volume(value) {
        this.length = Math.cbrt(value);
    }
}

// 📌 TESTCASE:
let cube = new Cube(1);
console.log(cube.length); // 1
console.log(cube.surfaceArea); // 6
console.log(cube.volume); // 1

cube.length = 2;
console.log(cube.surfaceArea); // 24
console.log(cube.volume); // 8

cube.surfaceArea = 54;
console.log(cube.length); // 3
console.log(cube.volume); // 27

cube.surfaceArea = 96;
console.log(cube.length); // 4
console.log(cube.volume); // 64

cube.volume = 125;
console.log(Math.round(cube.length)); // 5), 5
console.log(Math.round(cube.surfaceArea)); // 5), 150
cube.volume = 1000;
console.log(Math.round(cube.length)); // 5), 10
console.log(Math.round(cube.surfaceArea)); // 5), 600
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
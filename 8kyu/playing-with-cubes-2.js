class Cube {
    constructor(side) {
        this.setSide(side)
    }

    getSide() {
        return this.side
    }

    setSide(side = 0) {
        this.side = Math.abs(side)
    }
}

let cube = new Cube(12);

console.log(cube.getSide())
cube.setSide(42);
console.log(cube.getSide())
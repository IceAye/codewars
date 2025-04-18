// ❓ DESCRIPTION:
// Write a class Block that creates a block (Duh..)
// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
// Define these methods:
// `getWidth()` return the width of the `Block`
// `getLength()` return the length of the `Block`
// `getHeight()` return the height of the `Block`
// `getVolume()` return the volume of the `Block`
// `getSurfaceArea()` return the surface area of the `Block`
// Note: no error checking is needed.
//
// ✅ SOLUTION:
class Block{

    constructor(data){
        this.width = data[0];
        this.length = data[1];
        this.height = data[2];
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.width * this.height + this.length * this.height + this.width * this.length);
    }

}

// 📌 TESTCASE:
let block = new Block([2,4,6]);

console.log(block.getWidth()) //  2
console.log(block.getLength()) // 4
console.log(block.getHeight()) // 6
console.log(block.getVolume()) // 48
console.log(block.getSurfaceArea()) // 88
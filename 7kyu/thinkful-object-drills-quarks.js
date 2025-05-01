class Quark {
    constructor(color, flavor) {
        this.color = color
        this.flavor = flavor
        this.baryon_number = 1/3
    }
    interact(quark) {
        let swapColor = quark.color;
        quark.color = this.color;
        return this.color = swapColor;
    }
}

let q1 = new Quark("red", "up")
let q2 = new Quark("blue", "strange")

console.log(q1.color, "red")
console.log(q2.flavor, "strange")
console.log(q2.baryon_number, 1 / 3)

q1.interact(q2)
console.log(q1.color, "blue")
console.log(q2.color, "red")
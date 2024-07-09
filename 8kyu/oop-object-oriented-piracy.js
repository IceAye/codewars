class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }
    isWorthIt() {
        return (this.draft - this.crew * 1.5) > 20
    }
}

const emptyShip = new Ship(0,0)
const aWorthyShip = new Ship(100,20)
const biggerBoat = new Ship(35,20)


console.log('Output: ' , emptyShip.isWorthIt())
console.log('Output: ' , biggerBoat.isWorthIt())
console.log('Output: ' , aWorthyShip.isWorthIt())
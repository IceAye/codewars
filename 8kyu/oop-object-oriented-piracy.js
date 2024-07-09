// ❓ DESCRIPTION:
// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan.
// With the help of OOP you wish to make a pretty efficient system to identify ships
// with heavy booty on board!
// Unfortunately for you, people weigh a lot these days,
// so how do you know if a ship is full of gold and not people?
// Every time your spies see a new ship enter the dock,
// they will create a new ship object based on their observations:
//      draft - an estimate of the ship's weight based on how low it is in the water
//      crew - the count of crew on board
// Each crew member adds 1.5 units to the ship draft.
// If after removing the weight of the crew, the draft is still more than 20,
// then the ship is worth looting. Any ship weighing that much must have a lot of booty!
//
// ✅ SOLUTION:
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
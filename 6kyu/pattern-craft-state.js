class SiegeState {
    constructor() {
        this.canMove = false
        this.damage = 20
    }
}

class TankState {
    constructor() {
        this.canMove = true
        this.damage = 5
    }

}

class Tank {
    constructor() {
        this.state = new TankState()
    }

    get canMove() {
        return this.state.canMove
    }
    get damage() {
        return this.state.damage
    }
}

let tank = new Tank();
console.log(tank.canMove, true);
console.log(tank.damage, 5);

let tank1 = new Tank();
tank1.state = new SiegeState();
console.log(tank1.canMove, false);
console.log(tank1.damage, 20);

let tank2 = new Tank();
console.log(tank2.canMove, true);
tank2.state = new SiegeState();
console.log(tank2.damage, 20);
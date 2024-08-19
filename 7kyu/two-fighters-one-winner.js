class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let turn = firstAttacker === fighter1.name;

    while (true) {
        if (turn) {
            fighter2.health -= fighter1.damagePerAttack;
            if (fighter2.health <= 0) return fighter1.name;
        } else {
            fighter1.health -= fighter2.damagePerAttack;
            if (fighter1.health <= 0) return fighter2.name;
        }
        turn = !turn;
    }
}

console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),
);
console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"),
);

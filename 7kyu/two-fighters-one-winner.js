// ❓ DESCRIPTION:
// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
//
// ✅ SOLUTION:
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

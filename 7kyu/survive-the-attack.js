// ❓ DESCRIPTION:
// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.
//
// CONDITIONS
// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
//
// ✅ SOLUTION:
function hasSurvived(attackers, defenders) {
    let attackPower = 0;
    let defenderPower = 0;

    let attackSurvivors = 0;
    let defenderSurvivors = 0;

    for (let i = 0; i < Math.max(attackers.length, defenders.length); i++) {
        if (attackers[i] && defenders[i]) {
            attackSurvivors += attackers[i] - defenders[i] > 0 ? 1 : 0;
            defenderSurvivors += defenders[i] - attackers[i] > 0 ? 1 : 0;
            attackPower += attackers[i];
            defenderPower += defenders[i];
        }
        if (attackers[i] === undefined) return true;
        if (defenders[i] === undefined) return false;
    }

    if (attackSurvivors === defenderSurvivors) {
        return attackPower <= defenderPower;
    }

    return attackSurvivors < defenderSurvivors;
}

// 📌 TESTCASE:
console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);

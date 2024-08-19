function towerBuilder(nFloors) {
    let tower = [];
    let base = 1 + 2 * (nFloors - 1);
    let i = 1;

    while (i <= nFloors) {
        let asterix = 1 + 2 * (i - 1);
        let spaces = (base - asterix) / 2;
        tower.push(" ".repeat(spaces) + "*".repeat(asterix) + " ".repeat(spaces));
        i++;
    }
    return tower;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));

// ❓ DESCRIPTION:
// Find out why the amount of honey in the hive is not increasing.
//
// ✅ SOLUTION:
function Bee(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
}

function Hive() {
    this.pollen = 100;
}

Hive.prototype.addPollen = function(pollen) {
    this.pollen += pollen;
}

Hive.prototype.getPollen = function() {
    return this.pollen;
}

Bee.prototype.unloadPollen = function() {
    this.hive.addPollen(this.capacity);
}
function makeClass(...properties) {
    return class {
        constructor(...values) {
            properties.forEach((prop, ind) => this[prop] = values[ind])
        }
    }
}

class Animal {
    constructor(name, species, age, health, weight, color) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.weight = weight;
        this.color = color;
    }
}

const Animal2 = makeClass('name','species','age','health','weight','color');

const dog1 = new Animal('Bob','Dog','5','good','50lb','brown');
const dog2 = new Animal2('Bob','Dog','5','good','50lb','brown');

console.log(dog1)
console.log(dog2)

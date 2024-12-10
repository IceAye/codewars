Dog.prototype.bark = function () {
    return "Woof!";
};

function Dog(name, breed, sex, age) {
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.age = age;
}

let apollo = new Dog("Apollo", "Dobermann", "male", "4");
let zeus = new Dog("Zeus", "Dobermann", "male", "4");

console.log(apollo.bark()); // 'Woof!'
console.log(zeus.bark()); // 'Woof!'
function Dog (breed) {
    this.breed = breed;
}

Dog.prototype.bark = function() {
    return "Woof";
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");
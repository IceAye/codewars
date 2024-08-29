// ❓ DESCRIPTION:
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
//
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
//
// Use method prototypes to enable all Dogs to bark.
//
// ✅ SOLUTION:
function Dog (breed) {
    this.breed = breed;
}

Dog.prototype.bark = function() {
    return "Woof";
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");
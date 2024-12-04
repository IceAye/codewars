// ❓ DESCRIPTION:
// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)
// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.
//
// ✅ SOLUTION:
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

// 📌 TESTCASE:
let jack = new Person('Jack');
let jill = new Person('Jill');
console.log(jack.name) // 'Jack'
console.log(jill.name) // 'Jill'
console.log(jack.greet('Jill')) // 'Hello Jill, my name is Jack'
console.log(jill.greet('Jack')) // 'Hello Jack, my name is Jill'
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

let jack = new Person('Jack');
let jill = new Person('Jill');
console.log(jack.name) // 'Jack'
console.log(jill.name) // 'Jill'
console.log(jack.greet('Jill')) // 'Hello Jill, my name is Jack'
console.log(jill.greet('Jack')) // 'Hello Jack, my name is Jill'
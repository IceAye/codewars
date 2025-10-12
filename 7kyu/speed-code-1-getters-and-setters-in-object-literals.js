const person = {
    firstName: 'Jane',
    lastName : 'Doe',

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
};

console.log(person, "'person' is not defined");
console.log(person.firstName, 'Jane');
console.log(person.lastName, 'Doe');
console.log(person.fullName, 'Jane Doe');
person.firstName = 'John';
console.log(person.fullName, 'John Doe');
person.lastName = 'Anderson';
console.log(person.fullName, 'John Anderson');
person.firstName = 'Donald';
console.log(person.fullName, 'Donald Anderson');
person.lastName = 'Leung';
console.log(person.fullName, 'Donald Leung');
person.fullName = 'Oliver Crawford';
console.log(person.firstName, 'Oliver');
console.log(person.lastName, 'Crawford');
person.fullName = 'Andre Baghurst';
console.log(person.firstName, 'Andre');
console.log(person.lastName, 'Baghurst');

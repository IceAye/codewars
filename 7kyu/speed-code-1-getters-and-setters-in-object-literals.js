// ❓ DESCRIPTION:
// Introduction
// In this Kata series, you are expected to scan through the description as quickly as possible. Once you think you understand what the description is asking for, you should (ideally) then time yourself with a stopwatch to see how long it takes for you to code a solution that passes all of the tests. You are then encouraged to post your completion time in the comments. At the end of the day, who is the fastest coder? Get set, go! :D
//
// Philosophy
// This Kata series aims to test your ability to quickly recall programming language features and apply them appropriately and efficiently. For example, if you are asked to return the square root of a number, you are expected to recall the built-in method Math.sqrt(number) immediately instead of sitting down thinking for 5 minutes before programming a custom algorithm that calculates the square root of a number.
//
// Objective (named "Task" in my other Kata)
// Define a variable person which stores an object literal. The object literal should have the following properties:
//
// A firstName of "Jane"
// A lastName of "Doe"
// The object literal should then have a getter and setter called fullName which returns and parses the full name of the person respectively. A full name is defined as follows: If the first name is "Jane" and the last name is "Doe" then the full name is "Jane Doe" and vice versa. You may assume all full names are valid when parsing them.
//

// ✅ SOLUTION:
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

// 📌 TESTCASE:
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

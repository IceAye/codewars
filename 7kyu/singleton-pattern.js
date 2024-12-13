// ❓ DESCRIPTION:
// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
// Create an Singleton pattern, so there is one object in system.
//
// ✅ SOLUTION:
const Singleton = function () {
    if (Singleton.__instance) {
        return Singleton.__instance;
    }
    return (Singleton.__instance = this);
};

// 📌 TESTCASE:

let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1
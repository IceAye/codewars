// ❓ DESCRIPTION:
// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
//
// ✅ SOLUTION:
Object.prototype.hash = function(string) {
    return string.split('.').reduce((obj, key) => obj ? obj[key] : obj, this)
}

// 📌 TESTCASE:
const obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.name'), 'joe');
console.log(obj.hash('person.game.home'), undefined);

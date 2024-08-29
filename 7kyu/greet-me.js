// ❓ DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
// ✅ SOLUTION:
let greet = function (name) {
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
};

console.log(greet("riley"));
console.log(greet("JACK"));

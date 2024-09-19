// ❓ DESCRIPTION:
// (actually this is PascalCase method!)
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
//
// ✅ SOLUTION:
String.prototype.camelCase = function () {
    return this.replace(/( |^)\w/g, c => c.toUpperCase()).replace(/\s/g, "")
};

console.log("test case".camelCase());
console.log("camel Case method".camelCase());
console.log("say hello".camelCase());

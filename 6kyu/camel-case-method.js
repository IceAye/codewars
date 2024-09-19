String.prototype.camelCase = function () {
    return this.replace(/( |^)\w/g, c => c.toUpperCase()).replace(/\s/g, "")
};

console.log("test case".camelCase());
console.log("camel Case method".camelCase());
console.log("say hello".camelCase());

// SOLUTION 1:
Boolean.prototype.toString = function() {
    return '' + this;
}

Number.prototype.toString = function() {
    return '' + this;
}

Array.prototype.toString = function() {
    return `[${this.join(',')}]`;
}

// SOLUTION 2:
Boolean.prototype.toString = function() {
    return JSON.stringify(this);
}

Number.prototype.toString = function() {
    return JSON.stringify(this);
}

Array.prototype.toString = function() {
    return JSON.stringify(this);
}

console.log((123).toString(), "123");
console.log(Math.PI.toString(), "3.141592653589793");
console.log(Math.E.toString(), "2.718281828459045");
console.log(true.toString(), "true");
console.log(false.toString(), "false");
console.log([].toString())
console.log([1].toString())
console.log([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]");
